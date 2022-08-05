// Gulp
const { dest, parallel, series, src, watch } = require("gulp");
// Config
const config = require("./gulpfile.config.js");

// Plugins
const autoprefixer = require("autoprefixer");
//const browserSync = require("browser-sync").create();
//const browserSyncConfig = require(`./browser-sync.config.js`);
const cssnano = require("cssnano");
const del = require("del");
const notify = require("gulp-notify");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass")(require("sass"));
const sassLint = require("gulp-sass-lint");
const sourceMaps = require("gulp-sourcemaps");
const tailwind = require("tailwindcss");
const eslint = require("gulp-eslint");
const webpack = require("webpack-stream");
const webpackConfig = require(`./webpack.config.js`);
const { exec } = require("child_process");
const fs = require("fs");

function clean() {
	return del([
		config.destDirs.css[0],
		config.destDirs.js[0],
		config.destDirs.maps[0],
		config.destDirs.assets[0],
	]);
}

function setProduction(cb) {
	process.env.NODE_ENV = "production";
	cb();
}

function scripts() {
	const isProduction = process.env.NODE_ENV === "production";

	if (isProduction) {
		webpackConfig.optimization.minimize = true;
		webpackConfig.mode = "production";
	} else {
		webpackConfig.devtool = "source-map";
		webpackConfig.mode = "development";
	}

	let scripts = src(`${config.srcPaths.ts}`).pipe(webpack(webpackConfig));

	if (!isProduction) {
		scripts = scripts.on(
			"error",
			notify.onError({
				title: "Scripts Error",
				message: "<%= error.message %>",
				onLast: true,
			})
		);
	}

	scripts = scripts.on("error", function () {
		this.emit("end");
	});

	for (let scriptDestination of config.destDirs.js) {
		scripts = scripts.pipe(dest(scriptDestination));
	}

	return scripts;
}

// Scripts Linting Task
function scriptsLint() {
	return src(`${config.srcPaths.ts}`)
		.pipe(eslint())
		.pipe(eslint.formatEach());
}

// Scripts Watch Task
function watchScripts() {
	return watch(
		[config.srcPaths.ts, "tailwind.config.js", "*/*/colors.js"],
		scripts
	);
}

function styles() {
	const isProduction = process.env.NODE_ENV === "production";
	let postCssPlugins = [tailwind, autoprefixer];
	let sassOptions = {};

	if (isProduction) {
		postCssPlugins.push(cssnano);
		sassOptions = { outputStyle: "compressed" };
	} else {
		process.env.NODE_ENV = "development";
		sassOptions = { sourceComments: "true" };
	}

	let styles = src(config.srcPaths.sass);

	if (!isProduction) {
		styles = styles.pipe(sourceMaps.init());
	}

	styles = styles.pipe(sass(sassOptions));

	if (!isProduction) {
		styles = styles.on(
			"error",
			notify.onError({
				title: "Styles Error",
				message: "<%= error.message %>",
				onLast: true,
			})
		);
	}

	styles = styles.pipe(postcss(postCssPlugins));

	if (!isProduction) {
		styles = styles.pipe(sourceMaps.write(config.destDirs.maps));
	}

	for (let stylesDestination of config.destDirs.css) {
		styles = styles.pipe(dest(stylesDestination));
	}
	return styles;
}

// Styles Linting Task
function stylesLint() {
	return src(config.srcPaths.sass)
		.pipe(
			sassLint({
				configFile: ".sass-lint.yml",
			})
		)
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError());
}

/*function stylesLint2() {
	return src(config.srcPaths.sass).pipe(
		styleLint({
			reporters: [
				{
					formatter: "string",
					console: true,
				},
			],
			failAfterError: true,
		})
	);
}*/

// Styles Watch Task
function watchStyles() {
	return watch(
		[
			config.srcPaths.sass,
			"tailwind.config.js",
			"./snippets/**/*.liquid",
			"./sections/**/*.liquid",
			"./layout/**/*.liquid",
			"./src/**/*.js",
			"./src/**/*.ts",
			"*/*/colors.js",
		],
		styles
	);
}

// Move assets task
function assets() {
	return src(`${config.srcDirs.assets}/**/*`).pipe(
		dest(config.destDirs.assets)
	);
}

// Move favicons task
function favicons() {
	let favicons = src(`${config.srcDirs.favicons}/**/*`);
	for (let faviconsDestination of config.destDirs.favicons) {
		favicons = favicons.pipe(dest(faviconsDestination));
	}
	return favicons;
}

module.exports = {
	assets,
	favicons,
	scripts,
	scriptsLint,
	styles,
	stylesLint,
	default: series(assets, favicons, scripts, styles),
	production: series(
		clean,
		assets,
		favicons,
		setProduction,
		scriptsLint,
		scripts,
		//stylesLint,
		styles,
	),
	watch: parallel(watchScripts, watchStyles),
	watchScripts,
	watchStyles,
};

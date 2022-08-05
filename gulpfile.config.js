// Environment types
const ENVIRONMENTS = {
	development: `development`,
	production: `production`,
};
const BASE_DIRS = {
	input: `./src`,
	output: `./assets`,
};
// Input Directories
const SRC_DIRS = {
	assets: `${BASE_DIRS.input}/static/assets`,
	favicons: `${BASE_DIRS.input}/static/favicons`,
	images: `${BASE_DIRS.input}/static/assets/images`,
	js: `${BASE_DIRS.input}/js`,
	sass: `${BASE_DIRS.input}/sass`,
	svgs: `${BASE_DIRS.input}/static/assets/svgs`,
	ts: `${BASE_DIRS.input}/ts`,
};
// File types
const SRC_PATHS = {
	sass: `${SRC_DIRS.sass}/**/*.scss`,
	ts: `${SRC_DIRS.ts}/**/*.ts`,
};
// Output Directories
const DEST_DIRS = {
	assets: [`${BASE_DIRS.output}`],
	favicons: [`${BASE_DIRS.output}`],
	css: [`${BASE_DIRS.output}`],
	images: [`${BASE_DIRS.output}`],
	js: [`${BASE_DIRS.output}`],
	maps: [`${BASE_DIRS.output}`],
	svgs: [`${BASE_DIRS.output}`],
};

module.exports = {
	destDirs: DEST_DIRS,
	environments: ENVIRONMENTS,
	srcDirs: SRC_DIRS,
	srcPaths: SRC_PATHS,
};

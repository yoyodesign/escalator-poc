module.exports = {
	cache: true,
	entry: {
		index: ["./src/ts/index.ts"],
	},
	output: {
		filename: "[name].js",
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
				use: ["babel-loader", "ts-loader"],
			},
			{
				test: /\.js?$/,
				exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	optimization: {
		/*splitChunks: {
			chunks(chunk) {
				return (
					chunk.name !== "lazysizes" &&
					chunk.name !== "lsrespimg" &&
					chunk.name !== "lsobjectfit"
				);
			},
			maxInitialRequests: Infinity,
			minSize: 0,
		},*/
	},
};

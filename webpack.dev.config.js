const webpack = require("webpack");

module.exports = (env, options) => {
	return {
		entry: ["@babel/polyfill", "./index.js"],

		mode: "development",

		plugins: [
		],

		output: {
			path: __dirname + "/public",
			filename: "bundle.js",
		},

		devServer: {
			historyApiFallback: true,
			inline: true,
			port: 9800,
			contentBase: __dirname + "/public",
		},

		module: {
			rules: [
				{
					test: /\.js$/,
					loader: "babel-loader",
					exclude: /node_modules/,
				},
				{
					test: /\.css$/,
					use: ["style-loader", "css-loader"],
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: "url-loader",
							options: {
								limit: 8192,
							},
						},
					],
				},
				{
					test: /\.less$/,
					use: [
						{
							loader: "style-loader",
						},
						{
							loader: "css-loader",
						},
						{
							loader: "less-loader",
							options: {
								javascriptEnabled: true,
							},
						},
					],
				},
				{
				test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                use: [ 'raw-loader' ]
				},
			],
		},
	};
};

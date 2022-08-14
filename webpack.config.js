const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV ?? 'development';
const devMode = mode === 'development';

console.log(`Идет ${mode} сборка`)

module.exports = {
	mode,
	context: path.resolve(__dirname, 'src'),
	entry: {
		main: './index.js',
		analytics: './analytics.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				use: 'html-loader'
			},
			{
				test: /\.(sc|sa|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
				]
			},
			{
				test: /\.(png|jpe?g|gif|webp|avif|svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name][ext]'
				}
			},
			{
				test: /\.(woff2?|ttf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]'
				}
			}
		]
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all'
		}
	},
	resolve: {
		alias: {
			'@styles': path.resolve(__dirname, 'src', 'styles'),
			'@modules': path.resolve(__dirname, 'src', 'modules'),
			'@assets': path.resolve(__dirname, 'src', 'assets'),
		}
	}
	
}

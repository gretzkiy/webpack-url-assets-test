'use strict';

const path = require('path');

module.exports = [
	{
		name: 'app',
		target: ['web', 'es2022'],
		mode: 'development',
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		output: {
			path: path.resolve(__dirname, 'dist'),
			publicPath: 'https://my-cdn.com/path-to-my-build-dist/',
			workerPublicPath: '/workers/'
		},

		module: {
			rules: [
				{
					test: /\.svg/,
					type: 'asset/resource'
				},

				{
					test: /\.ts$/,
					use: 'ts-loader',
				},
			]
		},

		resolve: {
			extensions: ['.ts', '.js'],
		},

		devtool: 'source-map'
	}
];

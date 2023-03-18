'use strict';

const path = require('path');

module.exports = [
	{
		name: 'app',
		target: ['web', 'es2022'],
		mode: 'development',
		entry: path.resolve(__dirname, 'src', 'index.js'),
		output: {
			path: path.resolve(__dirname, 'dist'),
			publicPath: 'https://my-cdn.com/path-to-my-build-dist/',
		},

		module: {
			rules: [
				{
					test: /worker/,
					type: 'asset/resource',
					// These options are not applied to the loaded worker
					generator: {
						publicPath: 'https://mywebapp-domain.com/workers/',
						filename: 'workers/[hash][ext]',
					}
				}
			]
		},

		devtool: 'source-map'
	}
];

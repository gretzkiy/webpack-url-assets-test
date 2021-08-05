'use strict';

const path = require('path');

module.exports = {
	target: ['web', 'es2020'],
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		library: {
			type: 'umd',
			name: 'testLib',
			export: 'default'
		}
	},

	devtool: 'source-map'
};

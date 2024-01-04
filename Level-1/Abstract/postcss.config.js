module.exports = {
	plugins: [
		require('postcss-extend-rule'),
		require('postcss-url'),
		require('autoprefixer'),
		require('postcss-preset-env'),
		require('postcss-nested'),
		require('postcss-mixins'),
		require('postcss-normalize'),
		require('cssnano'),
	],
};

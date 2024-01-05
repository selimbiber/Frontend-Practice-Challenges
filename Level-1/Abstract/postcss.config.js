module.exports = {
	plugins: [
		require('postcss-nested'),
		require('autoprefixer'),
		require('postcss-import'),
		require('postcss-mixins'),
		require('postcss-url'),
		require('postcss-preset-env')({ stage: 1 }),
		require('cssnano')({ preset: 'default' }),
	],
};

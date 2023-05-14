const babelOptions = {
    presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
    plugins: [
        '@compiled/babel-plugin', // Make sure this is defined last if there are multiple plugins
    ],
};

module.exports = require('babel-jest').default.createTransformer(babelOptions);

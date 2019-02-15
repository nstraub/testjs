module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        libraryTarget: 'umd',
        filename: 'dist/test.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]

    }
};

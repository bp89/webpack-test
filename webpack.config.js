const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: "build/" //to enable public paths
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: '/\.js$/'
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            },
            {
                use: [
                    {
                            loader: 'url-loader',
                        options: {limit: 40000} //if bigImage greater than 40000 bytes then save it as separate bigImage
                    },
                    'image-webpack-loader'
                ],
                test: /\.jpe?g|png|gif|svg$/
            }
        ]
    }
}

module.exports = config;

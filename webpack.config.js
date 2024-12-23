const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
            'index': './src/index.js' // Specify your entry point
        }, 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js', // The bundled JavaScript file
        clean: true, // Cleans the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: 'html-loader', // Handles image references in HTML
            },
            {
                test: /\.css$/, // Handles CSS files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/, // For image files
                type: 'asset/resource',
                generator: {
                  filename: 'images/[name][hash][ext][query]',
                },
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/, // For font files
                type: 'asset/resource',
                generator: {
                  filename: 'fonts/[name][hash][ext][query]',
                },
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Your HTML template file
            filename: 'index.html', // Name of the output HTML file
        }),
    ],
    devServer: {
        static: './dist', // Directory to serve static files
        open: true, // Opens the browser automatically
        hot: true, // Enables hot module replacement
    },
    mode: 'development', // Change to 'production' for production builds
};

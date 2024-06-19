const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
	  {
        test: /\.(png|jpe?g|gif|svg)$/i,
		type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
    }),
	new FaviconsWebpackPlugin('./src/assets/images/logo-small.svg'),
  ],
  mode: 'development',
  devServer: {
    host: '192.168.0.195',
    port: 8080,
}
};
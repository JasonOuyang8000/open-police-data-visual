const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const path = require("path");

module.exports = {
    mode: 'development',
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          },
          {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[hash]-[name].[ext]',
              },
            },
          ]
          },
        ]
    },
    optimization: {
        splitChunks: { chunks: "all" }
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html")
        })
      ,
      new Dotenv()
    ],
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        helpers: path.resolve(__dirname, 'src/helpers/'),
        context: path.resolve(__dirname, 'src/context/'),
        images: path.resolve(__dirname, 'src/assets/images/'),
        hooks: path.resolve(__dirname, 'src/hooks/'),
      },
    },
    watch: true,

    devServer: {
      historyApiFallback: true,
      contentBase: './',
      hot: true
    }
    
 
 
};
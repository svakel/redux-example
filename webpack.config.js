const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');


module.exports = {
    entry: './src/index.tsx',
    output: {
      filename: "bundle.js",
      // path: path.resolve(__dirname + "/dist"),
      path: resolve(__dirname, 'dist'),
      // publicPath: "/public/",
  },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",
    mode: 'development',

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },

    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          
          {  
            test: /\.tsx?$/,
            loader: "ts-loader"
          },
          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
          
      ]
    },

    // When importing a module whose path matches one of the following, just
          // assume a corresponding global variable exists and use that instead.
          // This is important because it allows us to avoid bundling all of our
          // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },

    // plugins: [
    //   new HtmlWebpackPlugin({
    //     template: './src/index.html'
    //   })
    // ],
 
    devServer: {
      // contentBase: './build',
      // port: 3040,
    }
  };
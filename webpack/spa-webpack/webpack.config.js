const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const webpackConfig = {
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader',
        {
          loader:'css-loader',
          options:{
            modules:{  //index__test--3j9_P
              localIdentName:'[name]__[local]--[hash:base64:5]'
            }
          }
        }]
      }
    ]
  },
  plugins: [
    new WebpackDeepScopeAnalysisPlugin(),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'./src/index.html'
    })
  ]
}
module.exports = webpackConfig

const path = require('path')

module.exports = {
    publicPath: './',
    // baseUrl: BASE_URL,  vue/cli 3.3之前
    // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    devServer: {
        proxy:{
            '/dist': {
                target: 'http://localhost:8080/',
                pathRewrite:{
                    '^/dist': ''
                }
            }
        }
    },
    configureWebpack: {
      resolve: {
        alias: {
          'styles': path.join(__dirname, 'src/assets/styles')
        }
      }
    },
    chainWebpack: config => {
      config.module
        .rule('lrc')
        .test(/\.lrc$/)
        .use('file-loader')
        .loader('file-loader')
    },
}
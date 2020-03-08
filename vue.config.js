const path = require('path')

module.exports = {
    publicPath: './',
    // baseUrl: BASE_URL,  vue/cli 3.3之前
    // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    devServer: {
        proxy:{
            '/api': {
                target: 'http://localhost:8080/',
                pathRewrite:{
                    '^/api': '/mock'
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
    }
}
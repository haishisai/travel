module.exports = {
    publicPath: './',
    // baseUrl: BASE_URL,
    devServer: {
        proxy:{
            '/api': {
                target: 'http://localhost:8080/',
                pathRewrite:{
                    '^/api': '/mock'
                }
            }
        }
    }
}
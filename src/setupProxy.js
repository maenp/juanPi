const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/api', {
        target: 'https://webservice.juanpi.com',
        changeOrigin: true,
        // pathRewrite: { //替换地址栏目标
        //     '^/api': ''
        // }
    }));
};
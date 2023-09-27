const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://gateway-kms.apps.ocp4.pacosta.com',
        changeOrigin: true,
      })
    );
  };
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/course', {
      target: 'http://gateway-kms.apps.ocp4.pacosta.com', // API endpoint 1
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/auth', {
      target: 'http://keycloak-kms.apps.ocp4.pacosta.com', // API endpoint 2
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/users', {
      target: 'http://gateway-kms.apps.ocp4.pacosta.com', // API endpoint 2
      changeOrigin: true,
    })
  );
}
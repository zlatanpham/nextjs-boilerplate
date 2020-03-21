const path = require('path');
const withCSS = require('@zeit/next-css');
require('dotenv').config();

module.exports = withCSS({
  webpack(config, options) {
    [
      'components',
      'pages',
      'utils',
      'types',
      'styles',
      'utils',
      'libs',
    ].forEach(dir => {
      config.resolve.alias[dir] = path.join(__dirname, dir);
    });
    return config;
  },
  env: {},
});

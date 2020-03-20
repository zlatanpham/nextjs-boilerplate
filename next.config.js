const path = require('path');
const withCSS = require('@zeit/next-css');
require('dotenv').config();

module.exports = withCSS({
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['utils'] = path.join(__dirname, 'utils');
    config.resolve.alias['types'] = path.join(__dirname, 'types');
    config.resolve.alias['styles'] = path.join(__dirname, 'styles');
    return config;
  },
  env: {},
});

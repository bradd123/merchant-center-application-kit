const path = require('path');
const {
  createWebpackConfigForDevelopment,
} = require('@commercetools-frontend/mc-scripts');

const distPath = path.resolve(__dirname, 'dist');
const entryPoint = path.resolve(__dirname, 'src/index.js');
const sourceFolders = [path.resolve(__dirname, 'src')];

const config = createWebpackConfigForDevelopment({
  distPath,
  entryPoint,
  sourceFolders,
});

config.module.rules.push({
  // The docs-kit ship with a `rss-parser` module that relies on some nodejs
  // modules such as `http`, etc. Since we don't use this parsers, we can
  // resolve the module to a null loader.
  test: /rss-parser/,
  use: 'null-loader',
});

module.exports = config;

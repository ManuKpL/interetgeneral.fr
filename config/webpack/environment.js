const { environment }              = require('@rails/webpacker');
const typescript                   = require('./loaders/typescript');
const http                         = require('./loaders/html');
const { join, resolve }            = require('path');
const { ContextReplacementPlugin } = require('webpack');

const appDir = resolve(__dirname, '..', '..', 'app');
const ContextReplacement = new ContextReplacementPlugin(
  /@angular(\\|\/)core(\\|\/)esm5/,
  join(appDir, 'javascript'),
);

environment.loaders.append('http', http);
environment.loaders.append('typescript', typescript);
environment.plugins.append('ContextReplacement', ContextReplacement);

module.exports = environment;

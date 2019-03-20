const { environment }   = require('@rails/webpacker');
const { join, resolve } = require('path');
const {
  ContextReplacementPlugin, DefinePlugin,
} = require('webpack');

const html              = require('./loaders/html');
const typescript        = require('./loaders/typescript');
const style             = require('./loaders/style');

const { version }       = require('../../package.json');

const appDir = resolve(__dirname, '..', '..', 'app');
const ContextReplacement = new ContextReplacementPlugin(
  /@angular(\\|\/)core(\\|\/)f?esm5/,
  join(appDir, 'javascript'),
);

const env = new DefinePlugin({
  APP_VERSION: JSON.stringify(version),
  NODE_ENV: JSON.stringify(process.env.NODE_ENV),
});

const sassLoader   = environment.loaders.get('sass');
sassLoader.use     = style.loaders;
sassLoader.test    = style.test;
sassLoader.exclude = style.exclude;

environment.loaders.append('html', html);
environment.loaders.append('typescript', typescript);

environment.plugins.append('ContextReplacement', ContextReplacement);
environment.plugins.append('env', env);

module.exports = environment;

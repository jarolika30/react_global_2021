const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/template/latest',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'template',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './MainContainer': './src/containers/MainContainer',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);

const path = require('path');
const {
  CracoAliasPlugin, configPaths, aliasWebpack, // aliasJest,
} = require('react-app-alias');
require('json5/lib/register'); // craco+react-app-alias needs this json5 support


// See https://github.com/oklas/react-app-alias/issues/92
// require.extensions deprecated, but no alternatives?
// See https://github.com/nodejs/node/issues/32483
require.extensions['.json'] = require.extensions['.json5'];


// const resolvedTsConfigPath = path.resolve('./.config/tsconfig.json');
// const resolvedTsConfigPathsPath = path.resolve('./.config/tsconfig.paths.json');
// const aliasMap = configPaths(resolvedTsConfigPathsPath);
const aliasMap = configPaths('./.config/tsconfig.paths.json');

const cracoAliasOptions = {
  // default is empty for most cases (but not given this repo's .config folder)
  tsconfig: './.config/tsconfig.json',
  // tsconfig: resolvedTsConfigPath,
  // baseUrl:  resolvedBaseUrlPath + '\\',
  // baseUrl:  resolvedBaseUrlPath,
  baseUrl: 'src',
  alias:    aliasMap,
  autoscan: 'src',
};


module.exports = aliasWebpack(cracoAliasOptions);
// module.exports.jest = aliasJest(cracoAliasOptions);

module.exports = {
  eslint: {
    mode: 'file',
  },
  plugins: [
    {
      plugin:  CracoAliasPlugin,
      options: cracoAliasOptions,
    },
  ],
};

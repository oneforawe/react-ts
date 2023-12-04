const CracoAlias = require('craco-alias');

module.exports = {
  eslint: {
    mode: 'file',
  },
  plugins: [
    {
      plugin  : CracoAlias,
      options : {
        source                         : 'tsconfig',
        // A baseUrl SHOULD be specified; plugin does not take it from tsconfig.
        baseUrl                        : './src',
        // The path(s) file should specify the "baseUrl" and "paths".
        tsConfigPath                   : './tsconfig.paths.json',
        // To see debug messages, set to true:
        debug                          : false,
        // This setting of true is to enable a linked-package import alias:
        unsafeAllowModulesOutsideOfSrc : true,
      },
    },
  ],
};

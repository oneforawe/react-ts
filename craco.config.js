const { CracoAliasPlugin } = require('react-app-alias');


module.exports = {
  eslint: {
    mode: 'file',
  },
  plugins: [
    {
      plugin:  CracoAliasPlugin,
      options: {}, // default is empty for most cases
    },
  ],
};

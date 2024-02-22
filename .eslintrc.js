module.exports = {
    root: true,
    extends: 'airbnb-base',
    env: {
        browser: true,
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        allowImportExportEverywhere: true,
        sourceType: 'module',
        requireConfigFile: false,
    },
    rules: {
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'max-len': ['error', { code: 120 }],
        'no-param-reassign': [2, { props: false }],
        'linebreak-style': ['error', 'unix'],
        'import/extensions': ['error', {
          js: 'always',
      }],
      'no-unused-vars': ['warn', { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
  },
};

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:node/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        ignores: ['modules'],
      },
    ],
    'node/no-missing-import': [
      'error',
      {
        allowModules: [],
        tryExtensions: ['.js', '.ts'],
      },
    ],
    'class-methods-use-this': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};

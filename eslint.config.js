module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: [
      'airbnb-base',
      'plugin:jest/all',
      'eslint:recommended',
      'semistandard',
      'plugin:promise/recommended'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'jest',
      'promise'
    ],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
    overrides: [
      {
        files: ['*.js'],
        excludedFiles: 'babel.config.js',
      }
    ]
  };

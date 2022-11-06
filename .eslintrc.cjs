/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {},
      {
        usePrettierrc: true,
        fileInfoOptions: {
          withNodeModules: true,
        },
      },
    ],
    'no-useless-escape': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    'no-mixed-operators': ['off'],
    'no-multiple-empty-lines': ['off'],
    'no-unexpected-multiline': ['off'],
    '@typescript-eslint/no-unused-vars': ['off'],
    'sort-imports': ['warn', { ignoreDeclarationSort: true }],
    'no-duplicate-imports': ['warn', { includeExports: true }],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: false,
      },
    ],
    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },

          '{}': {
            message: 'Use object instead',
            fixWith: 'object',
          },
        },
      },
    ],
  },
};

module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      // ECMAScript의 언어 확장 기능
      jsx: true,
    },
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: [
    // 원하는 규칙 집합
    '@typescript-eslint',
    'react',
    'prettier',
  ],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
  globals: {
    React: 'writable',
  },
};

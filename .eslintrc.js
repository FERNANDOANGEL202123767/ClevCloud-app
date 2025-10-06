module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};

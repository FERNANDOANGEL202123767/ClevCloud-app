module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@screens': './src/screens',
          '@api': './src/api',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@types': './src/types',
          '@config': './src/config',
          '@store': './src/store',
          '@styles': './src/styles',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

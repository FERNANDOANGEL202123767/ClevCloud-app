const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Agrega soporte para react-native-reanimated (opcional pero recomendado)
config.resolver.sourceExts.push('mjs');

module.exports = config;
import { useRef } from 'react';
import { Animated } from 'react-native';

export const useAnimation = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration: number = 300) => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };

  return { fadeAnim, fadeIn };
};

import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, SPACING, SHADOWS } from '@/config/theme';

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ children, onPress }) => {
  const content = <View style={styles.card}>{children}</View>;

  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOWS.medium,
  },
});

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '@/config/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  type?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  type = 'primary',
}) => {
  const backgroundColor = type === 'primary' ? COLORS.primary : COLORS.secondary;
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: COLORS.surface,
    fontSize: TYPOGRAPHY.body,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.5,
  },
});

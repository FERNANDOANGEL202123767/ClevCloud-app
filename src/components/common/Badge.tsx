import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SPACING, TYPOGRAPHY } from '@/config/theme';

interface BadgeProps {
  text: string;
  type?: 'success' | 'warning' | 'error' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({ text, type = 'info' }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return '#D1FAE5';
      case 'warning':
        return '#FEF3C7';
      case 'error':
        return '#FEE2E2';
      default:
        return '#DBEAFE';
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'success':
        return '#065F46';
      case 'warning':
        return '#92400E';
      case 'error':
        return '#991B1B';
      default:
        return '#1E40AF';
    }
  };

  return (
    <View style={[styles.badge, { backgroundColor: getBackgroundColor() }]}>
      <Text style={[styles.text, { color: getTextColor() }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: TYPOGRAPHY.small,
    fontWeight: '600',
  },
});

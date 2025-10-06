import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '@/config/theme';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>⚠︎</Text>
        <Text style={styles.message}>{message}</Text>
        {onRetry && (
          <TouchableOpacity style={styles.button} onPress={onRetry} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Reintentar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: SPACING.lg,
  },
  content: {
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    padding: SPACING.xl,
    borderRadius: 16,
    width: '100%',
  },
  emoji: {
    fontSize: 48,
    marginBottom: SPACING.md,
  },
  message: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.surface,
    fontSize: TYPOGRAPHY.body,
    fontWeight: '600',
  },
});

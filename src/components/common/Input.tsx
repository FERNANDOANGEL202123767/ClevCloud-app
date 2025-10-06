import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '@/config/theme';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  icon?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder = 'Ingrese texto...',
  secureTextEntry = false,
  icon,
}) => {
  return (
    <View style={styles.container}>
      {icon && <Text style={styles.icon}>{icon}</Text>}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textSecondary}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    paddingHorizontal: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  icon: {
    fontSize: 18,
    marginRight: SPACING.sm,
  },
  input: {
    flex: 1,
    fontSize: TYPOGRAPHY.body,
    color: COLORS.text,
    paddingVertical: SPACING.sm,
  },
});

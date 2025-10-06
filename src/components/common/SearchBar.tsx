import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '@/config/theme';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Buscar proyectos...',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.icon}>🔍︎</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={COLORS.textSecondary}
        />
        {value.length > 0 && (
          <TouchableOpacity onPress={() => onChangeText('')} activeOpacity={0.7}>
            <Text style={styles.clearIcon}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.md,
  },
  searchContainer: {
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
  clearIcon: {
    fontSize: 20,
    color: COLORS.textSecondary,
    paddingLeft: SPACING.sm,
  },
});

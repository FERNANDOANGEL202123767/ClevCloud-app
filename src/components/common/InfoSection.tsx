import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '@/config/theme';

interface InfoSectionProps {
  icon: string;
  label: string;
  value?: string;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ icon, label, value }) => {
  if (!value) return null;
  return (
    <View style={styles.infoSection}>
      <View style={styles.infoHeader}>
        <Text style={styles.infoIcon}>{icon}</Text>
        <Text style={styles.infoLabel}>{label}</Text>
      </View>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoSection: {
    marginBottom: SPACING.md,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  infoIcon: {
    fontSize: 20,
    marginRight: SPACING.xs,
  },
  infoLabel: {
    fontSize: TYPOGRAPHY.small,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  infoValue: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.text,
    marginLeft: 28,
  },
});

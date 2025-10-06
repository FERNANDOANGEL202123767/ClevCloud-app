import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Project } from '@/types/project.types';
import { COLORS, SPACING, TYPOGRAPHY } from '@/config/theme';

interface ProjectCardProps {
  project: Project;
  onPress: () => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPress, index }) => {
  const getStatusType = (estado?: string) => {
    if (!estado) return 'info';
    const lower = estado.toLowerCase();
    if (lower.includes('finalizado') || lower.includes('completado')) return 'success';
    if (lower.includes('proceso') || lower.includes('activo')) return 'warning';
    if (lower.includes('cancelado') || lower.includes('pausado')) return 'error';
    return 'info';
  };

  return (
    <Card onPress={onPress} delay={index * 50}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {project.nombre || 'Sin nombre'}
          </Text>
          {project.estado && <Badge text={project.estado} type={getStatusType(project.estado)} />}
        </View>
      </View>

      {project.cliente && (
        <View style={styles.row}>
          <Text style={styles.icon}>⚗︎</Text>
          <Text style={styles.label}>Cliente:</Text>
          <Text style={styles.value} numberOfLines={1}>
            {project.cliente}
          </Text>
        </View>
      )}

      {project.tecnico && (
        <View style={styles.row}>
          <Text style={styles.icon}>⚒︎</Text>
          <Text style={styles.label}>Técnico:</Text>
          <Text style={styles.value} numberOfLines={1}>
            {project.tecnico}
          </Text>
        </View>
      )}

      {project.ubicacion && (
        <View style={styles.row}>
          <Text style={styles.icon}>⚘</Text>
          <Text style={styles.label}>Ubicación:</Text>
          <Text style={styles.value} numberOfLines={1}>
            {project.ubicacion}
          </Text>
        </View>
      )}

      {project.progreso !== undefined && (
        <View style={styles.progressContainer}>
          <Text style={styles.progressLabel}>Progreso: {project.progreso}%</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${project.progreso}%` }]} />
          </View>
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: SPACING.sm,
  },
  titleContainer: {
    gap: SPACING.xs,
  },
  title: {
    fontSize: TYPOGRAPHY.h4,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  icon: {
    fontSize: 16,
    marginRight: SPACING.xs,
  },
  label: {
    fontSize: TYPOGRAPHY.small,
    color: COLORS.textSecondary,
    marginRight: SPACING.xs,
  },
  value: {
    fontSize: TYPOGRAPHY.small,
    color: COLORS.text,
    fontWeight: '500',
    flex: 1,
  },
  progressContainer: {
    marginTop: SPACING.md,
  },
  progressLabel: {
    fontSize: TYPOGRAPHY.small,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },
  progressBar: {
    height: 6,
    backgroundColor: COLORS.border,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 3,
  },
});

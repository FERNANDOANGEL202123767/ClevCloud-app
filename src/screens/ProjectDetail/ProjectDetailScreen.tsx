import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  ProjectDetailScreenRouteProp,
  ProjectDetailScreenNavigationProp,
} from '@/types/navigation.types';
import { Badge } from '@/components/common/Badge';
import { InfoSection } from '@/components/common/InfoSection';
import { COLORS, SPACING, TYPOGRAPHY, SHADOWS } from '@/config/theme';

export const ProjectDetailScreen: React.FC = () => {
  const route = useRoute<ProjectDetailScreenRouteProp>();
  const navigation = useNavigation<ProjectDetailScreenNavigationProp>();
  const { project } = route.params;

  const getStatusType = (estado?: string) => {
    if (!estado) return 'info';
    const lower = estado.toLowerCase();
    if (lower.includes('finalizado') || lower.includes('completado')) return 'success';
    if (lower.includes('proceso') || lower.includes('activo')) return 'warning';
    if (lower.includes('cancelado') || lower.includes('pausado')) return 'error';
    return 'info';
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View style={styles.headerGradient}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={2}>
          {project.nombre || 'Sin nombre'}
        </Text>
        {project.estado && (
          <View style={styles.badgeContainer}>
            <Badge text={project.estado} type={getStatusType(project.estado)} />
          </View>
        )}
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        {project.descripcion && (
          <View style={styles.descriptionCard}>
            <Text style={styles.descriptionTitle}>Descripción</Text>
            <Text style={styles.descriptionText}>{project.descripcion}</Text>
          </View>
        )}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Información General</Text>
          <InfoSection icon="⚗︎" label="Cliente" value={project.cliente} />
          <InfoSection icon="⚒︎" label="Técnico" value={project.tecnico} />
          <InfoSection icon="⚘" label="Ubicación" value={project.ubicacion} />
          <InfoSection icon="✆" label="Contacto" value={project.contacto} />
          <InfoSection icon="✴︎" label="Prioridad" value={project.prioridad} />
        </View>
        {(project.fecha_inicio || project.fecha_fin) && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Fechas</Text>
            <InfoSection icon="⌨" label="Fecha de Inicio" value={project.fecha_inicio} />
            <InfoSection icon="★" label="Fecha de Fin" value={project.fecha_fin} />
          </View>
        )}
        {project.progreso !== undefined && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Progreso</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressHeader}>
                <Text style={styles.progressLabel}>Avance del proyecto</Text>
                <Text style={styles.progressPercentage}>{project.progreso}%</Text>
              </View>
              <View style={styles.progressBarContainer}>
                <View style={[styles.progressBarFill, { width: `${project.progreso}%` }]} />
              </View>
            </View>
          </View>
        )}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Detalles Técnicos</Text>
          <Text style={styles.idText}>ID: {project.id}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerGradient: {
    backgroundColor: COLORS.primary,
    paddingTop: SPACING.xl,
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.lg,
    ...SHADOWS.large,
  },
  backButton: {
    marginBottom: SPACING.sm,
  },
  backIcon: {
    fontSize: 28,
    color: COLORS.surface,
  },
  headerTitle: {
    fontSize: TYPOGRAPHY.h2,
    fontWeight: '800',
    color: COLORS.surface,
    marginBottom: SPACING.sm,
  },
  badgeContainer: {
    marginTop: SPACING.xs,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: SPACING.md,
  },
  descriptionCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOWS.medium,
  },
  descriptionTitle: {
    fontSize: TYPOGRAPHY.h4,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  descriptionText: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOWS.medium,
  },
  cardTitle: {
    fontSize: TYPOGRAPHY.h4,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  progressContainer: {
    marginTop: SPACING.xs,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  progressLabel: {
    fontSize: TYPOGRAPHY.small,
    color: COLORS.textSecondary,
  },
  progressPercentage: {
    fontSize: TYPOGRAPHY.h4,
    fontWeight: '700',
    color: COLORS.primary,
  },
  progressBarContainer: {
    height: 12,
    backgroundColor: COLORS.border,
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 6,
  },
  idText: {
    fontSize: TYPOGRAPHY.small,
    color: COLORS.textSecondary,
    fontFamily: 'monospace',
  },
});

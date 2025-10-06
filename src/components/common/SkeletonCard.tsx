import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { COLORS, SPACING } from '@/config/theme';

export const SkeletonCard: React.FC = () => {
  const shimmer = useSharedValue(0);

  useEffect(() => {
    shimmer.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true);
  }, [shimmer]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: shimmer.value,
  }));

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Animated.View style={[styles.titleSkeleton, animatedStyle]} />
        <Animated.View style={[styles.badgeSkeleton, animatedStyle]} />
      </View>
      <Animated.View style={[styles.rowSkeleton, animatedStyle]} />
      <Animated.View style={[styles.rowSkeleton, animatedStyle]} />
      <Animated.View style={[styles.rowSkeleton, animatedStyle]} />
      <Animated.View style={[styles.progressSkeleton, animatedStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    opacity: 0.7,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  titleSkeleton: {
    width: '60%',
    height: 20,
    backgroundColor: COLORS.border,
    borderRadius: 4,
  },
  badgeSkeleton: {
    width: 60,
    height: 20,
    backgroundColor: COLORS.border,
    borderRadius: 8,
  },
  rowSkeleton: {
    width: '100%',
    height: 16,
    backgroundColor: COLORS.border,
    borderRadius: 4,
    marginTop: SPACING.sm,
  },
  progressSkeleton: {
    width: '100%',
    height: 6,
    backgroundColor: COLORS.border,
    borderRadius: 3,
    marginTop: SPACING.md,
  },
});

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects, setSearchQuery } from '@/store/slices/projectSlice';
import { RootState, AppDispatch } from '@/store/store';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from '@/types/navigation.types';
import { ProjectCard } from '@/components/specific/ProjectCard';
import { SearchBar } from '@/components/common/SearchBar';
import { ErrorMessage } from '@/components/common/ErrorMessage';
import { COLORS, SPACING, TYPOGRAPHY } from '@/config/theme';
import { Project } from '@/types/project.types';
import { SkeletonCard } from '@/components/common/SkeletonCard';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useDispatch<AppDispatch>();

  const { filteredProjects, loading, error, searchQuery } = useSelector(
    (state: RootState) => state.projects
  );

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await dispatch(fetchProjects());
    setRefreshing(false);
  };

  const handleSearch = (text: string) => {
    dispatch(setSearchQuery(text));
  };

  const handleProjectPress = (project: Project) => {
    navigation.navigate('ProjectDetail', { project });
  };

  if (error) {
    return <ErrorMessage message={error} onRetry={() => dispatch(fetchProjects())} />;
  }

  if (loading && !refreshing) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
        <View style={styles.header}>
          {/* Header skeletons */}
          <View style={styles.titleSkeleton} />
          <View style={styles.subtitleSkeleton} />
        </View>
        <View style={styles.searchSkeleton} />
        <View style={styles.listContent}>
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      {/*<Image
        source={require('@/assets/images/44_Cloud.jpg')}
        style={styles.header}
        resizeMode="contain"
      />*/}
      <View style={styles.header}>
        <Text style={styles.title}>Proyectos</Text>
        <Text style={styles.subtitle}>
          {filteredProjects.length} {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'}
        </Text>
      </View>

      <SearchBar value={searchQuery} onChangeText={handleSearch} />

      {filteredProjects.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>🔍︎</Text>
          <Text style={styles.emptyText}>
            {searchQuery ? 'No se encontraron proyectos' : 'No hay proyectos disponibles'}
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredProjects}
          keyExtractor={item => item.id || Math.random().toString()}
          renderItem={({ item, index }) => (
            <ProjectCard project={item} onPress={() => handleProjectPress(item)} index={index} />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={[COLORS.primary]}
              tintColor={COLORS.primary}
            />
          }
          ListEmptyComponent={
            loading ? null : (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyEmoji}>🔍︎</Text>
                <Text style={styles.emptyText}>
                  {searchQuery ? 'No se encontraron proyectos' : 'No hay proyectos disponibles'}
                </Text>
              </View>
            )
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
  },
  title: {
    fontSize: TYPOGRAPHY.h1,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textSecondary,
  },
  listContent: {
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.xl,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: SPACING.md,
  },
  emptyText: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  titleSkeleton: {
    width: '50%',
    height: TYPOGRAPHY.h1,
    backgroundColor: COLORS.border,
    borderRadius: 4,
    marginBottom: SPACING.xs,
  },
  subtitleSkeleton: {
    width: '30%',
    height: TYPOGRAPHY.body,
    backgroundColor: COLORS.border,
    borderRadius: 4,
  },
  searchSkeleton: {
    height: 50,
    backgroundColor: COLORS.border,
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    borderRadius: 12,
  },
});

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Project } from '@/types/project.types';

export const useProjects = () => {
  const { filteredProjects, loading, error, searchQuery } = useSelector(
    (state: RootState) => state.projects
  );
  return { projects: filteredProjects as Project[], loading, error, searchQuery };
};

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { projectService } from '@/api/services/projectService';
import { Project } from '@/types/project.types';

interface ProjectState {
  projects: Project[];
  filteredProjects: Project[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
}

const initialState: ProjectState = {
  projects: [],
  filteredProjects: [],
  loading: false,
  error: null,
  searchQuery: '',
};

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {
    try {
      return await projectService.getAllProjects();
    } catch (error: any) {
      return rejectWithValue(error.message || 'Error al cargar proyectos');
    }
  }
);

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      if (!action.payload.trim()) {
        state.filteredProjects = state.projects;
      } else {
        const query = action.payload.toLowerCase();
        state.filteredProjects = state.projects.filter(
          project =>
            project.nombre?.toLowerCase().includes(query) ||
            project.cliente?.toLowerCase().includes(query) ||
            project.estado?.toLowerCase().includes(query)
        );
      }
    },
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProjects.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
        state.filteredProjects = action.payload;
        state.error = null; // Clear on success
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSearchQuery, clearError } = projectSlice.actions;
export default projectSlice.reducer;

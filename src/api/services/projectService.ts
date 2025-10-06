import apiClient from '../client';
import { ENDPOINTS } from '../endpoints';
import { Project } from '@/types/project.types';

export const projectService = {
  getAllProjects: async (): Promise<Project[]> => {
    try {
      const response = await apiClient.get(ENDPOINTS.ALL_PROJECTS);

      const rawData = response.data.PROYECTOS_TECNICO || [];

      if (!Array.isArray(rawData)) {
        console.warn('API returned non-array data for PROYECTOS_TECNICO');
        return [];
      }

      const mappedData: Project[] = rawData.map((item: any) => ({
        id: String(item.ID_PROYECTO || item.ID || 'unknown'),
        nombre: item.NOMBRE_PROYECTO || 'Sin nombre',
        cliente: item.PARQUE || 'Sin cliente',
        estado: item.ESTADO || undefined,
        descripcion: item.SERVICIO || item.COMENTARIOS || undefined,
        fecha_inicio: item.FECHA_INICIO || undefined,
        fecha_fin: item.FECHA_FIN || undefined,
        ubicacion: item.PARQUE || undefined,
        contacto: item.CONTACTO || undefined,
        tecnico: item.TECNICO_NOMBRE || undefined,
        prioridad: item.PRIORIDAD || undefined,
        progreso: item.PROGRESO !== undefined ? Number(item.PROGRESO) : undefined,
        supervisor: item.SUPERVISOR_NOMBRE || undefined,
        tlider: item.TLIDER || undefined,
        aerogeneradores: item.AEROGENERADORES || undefined,
        numeros_aerogeneradores: item.NUMEROS_AEROGENERADORES || undefined,
      }));

      return mappedData;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  searchProjects: async (query: string): Promise<Project[]> => {
    const projects = await projectService.getAllProjects();
    const lowerQuery = query.toLowerCase();

    return projects.filter(
      project =>
        project.nombre?.toLowerCase().includes(lowerQuery) ||
        project.cliente?.toLowerCase().includes(lowerQuery) ||
        project.estado?.toLowerCase().includes(lowerQuery)
    );
  },
};

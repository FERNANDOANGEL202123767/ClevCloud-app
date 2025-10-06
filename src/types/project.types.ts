export interface Project {
  id: string;
  nombre?: string;
  cliente?: string;
  estado?: string;
  descripcion?: string;
  fecha_inicio?: string;
  fecha_fin?: string;
  ubicacion?: string;
  contacto?: string;
  tecnico?: string;
  prioridad?: string;
  progreso?: number;
  [key: string]: any;
}

export interface ApiResponse {
  success: boolean;
  data: Project[];
  message?: string;
}

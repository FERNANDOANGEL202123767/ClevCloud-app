export const formatDate = (dateString?: string): string => {
  if (!dateString) return 'N/A';

  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
};

export const formatPercentage = (value?: number): string => {
  if (value === undefined || value === null) return '0%';
  return `${Math.round(value)}%`;
};

export const capitalize = (text?: string): string => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

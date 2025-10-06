export const isNotEmpty = (value?: string): boolean => {
  return !!value && value.trim().length > 0;
};

export const isValidEmail = (email?: string): boolean => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

import { useState, useCallback } from 'react';

export const useLoading = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const withLoading = useCallback(async <T>(fn: () => Promise<T>): Promise<T | null> => {
    setLoading(true);
    setError(null);
    try {
      return await fn();
    } catch (err) {
      setError((err as Error).message || 'Error desconocido');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, withLoading };
};

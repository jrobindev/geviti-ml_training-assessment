import { useState, useCallback } from 'react';

const API_BASE_URL = 'http://localhost:3001/api';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (endpoint, options = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      setLoading(false);
      return data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  }, []);

  const createPrediction = useCallback(async (sqft, bedrooms) => {
    return fetchData('/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sqft, bedrooms }),
    });
  }, [fetchData]);

  const getPredictions = useCallback(async (page = 1, limit = 10) => {
    return fetchData(`/predictions?page=${page}&limit=${limit}`);
  }, [fetchData]);

  const getStats = useCallback(async () => {
    return fetchData('/predictions/stats');
  }, [fetchData]);

  const getModelInfo = useCallback(async () => {
    return fetchData('/model/info');
  }, [fetchData]);

  const clearPredictions = useCallback(async () => {
    return fetchData('/predictions', { method: 'DELETE' });
  }, [fetchData]);

  return {
    loading,
    error,
    createPrediction,
    getPredictions,
    getStats,
    getModelInfo,
    clearPredictions,
  };
};
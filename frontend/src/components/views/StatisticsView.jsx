import { useState, useEffect } from 'react';
import StatsGrid from '../statistics/StatsGrid';
import EmptyState from '../common/EmptyState';
import { useApi } from '../../hooks/useApi';

const StatisticsView = () => {
  const [stats, setStats] = useState(null);
  const { getStats } = useApi();

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const data = await getStats();
      setStats(data);
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Prediction Statistics
      </h2>
      
      {stats && stats.count > 0 ? (
        <StatsGrid stats={stats} />
      ) : (
        <EmptyState
          title="No statistics available yet"
          message="Make predictions to see statistics"
        />
      )}
    </div>
  );
};

export default StatisticsView;
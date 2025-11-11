import { useState, useEffect } from 'react';
import ModelStatus from '../model/ModelStatus';
import ModelEquation from '../model/ModelEquation';
import CoefficientsGrid from '../model/CoefficientsGrid';
import MetricsGrid from '../model/MetricsGrid';
import AlgorithmInfo from '../model/AlgorithmInfo';
import EmptyState from '../common/EmptyState';
import { useApi } from '../../hooks/useApi';

const ModelInfoView = () => {
  const [modelInfo, setModelInfo] = useState(null);
  const { getModelInfo } = useApi();

  useEffect(() => {
    fetchModelInfo();
  }, []);

  const fetchModelInfo = async () => {
    try {
      const data = await getModelInfo();
      setModelInfo(data);
    } catch (err) {
      console.error('Error fetching model info:', err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Model Information
      </h2>
      
      {modelInfo && modelInfo.trained ? (
        <div className="space-y-6">
          <ModelStatus trained={modelInfo.trained} />
          <ModelEquation equation={modelInfo.equation} />
          <CoefficientsGrid
            intercept={modelInfo.intercept}
            coefficients={modelInfo.coefficients}
          />
          <MetricsGrid metrics={modelInfo.metrics} />
          <AlgorithmInfo />
        </div>
      ) : (
        <EmptyState
          title="Model not trained yet"
          message="The model is currently being initialized"
        />
      )}
    </div>
  );
};

export default ModelInfoView;
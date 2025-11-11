import { useState } from 'react';
import PredictionForm from '../predict/PredictionForm';
import PredictionResult from '../predict/PredictionResult';
import { useApi } from '../../hooks/useApi';

const PredictView = () => {
  const [prediction, setPrediction] = useState(null);
  const { createPrediction, loading } = useApi();

  const handleSubmit = async (sqft, bedrooms) => {
    try {
      const data = await createPrediction(sqft, bedrooms);
      setPrediction(data);
    } catch (err) {
      console.error('Error creating prediction:', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Get Price Prediction
        </h2>
        
        <PredictionForm onSubmit={handleSubmit} loading={loading} />
        <PredictionResult prediction={prediction} />
      </div>
    </div>
  );
};

export default PredictView;
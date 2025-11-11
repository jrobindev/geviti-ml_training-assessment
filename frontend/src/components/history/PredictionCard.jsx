import { formatPrice, formatDate } from '../../utils/formatters';

const PredictionCard = ({ prediction }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p className="text-xl font-semibold text-indigo-600">
            {formatPrice(prediction.prediction)}
          </p>
          {prediction.confidenceInterval && (
            <p className="text-xs text-gray-500 mt-1">
              Range: {formatPrice(prediction.confidenceInterval.lower)} - {formatPrice(prediction.confidenceInterval.upper)}
            </p>
          )}
          <div className="flex gap-4 mt-2 text-sm text-gray-600">
            <span>📏 {prediction.sqft.toLocaleString()} sq ft</span>
            <span>🛏️ {prediction.bedrooms} bedrooms</span>
          </div>
        </div>
        <p className="text-xs text-gray-500">
          {formatDate(prediction.timestamp)}
        </p>
      </div>
    </div>
  );
};

export default PredictionCard;
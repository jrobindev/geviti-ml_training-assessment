import { formatPrice } from '../../utils/formatters';

const MetricsGrid = ({ metrics }) => {
  if (!metrics) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Metrics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
          <p className="text-sm font-medium text-purple-800 mb-1">R² Score</p>
          <p className="text-3xl font-bold text-purple-900">
            {metrics.rSquared}
          </p>
          <p className="text-xs text-purple-700 mt-1">Coefficient of determination</p>
        </div>

        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <p className="text-sm font-medium text-orange-800 mb-1">MAE</p>
          <p className="text-3xl font-bold text-orange-900">
            {formatPrice(parseFloat(metrics.mae))}
          </p>
          <p className="text-xs text-orange-700 mt-1">Mean Absolute Error</p>
        </div>

        <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
          <p className="text-sm font-medium text-red-800 mb-1">RMSE</p>
          <p className="text-3xl font-bold text-red-900">
            {formatPrice(parseFloat(metrics.rmse))}
          </p>
          <p className="text-xs text-red-700 mt-1">Root Mean Squared Error</p>
        </div>

        <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg">
          <p className="text-sm font-medium text-teal-800 mb-1">Training Data</p>
          <p className="text-3xl font-bold text-teal-900">
            {metrics.trainingDataSize}
          </p>
          <p className="text-xs text-teal-700 mt-1">Sample size</p>
        </div>
      </div>
    </div>
  );
};

export default MetricsGrid;
const CoefficientsGrid = ({ intercept, coefficients }) => {
  if (!coefficients) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Coefficients</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Intercept (β₀)</p>
          <p className="text-2xl font-bold text-gray-900">
            {intercept.toFixed(2)}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Square Footage (β₁)</p>
          <p className="text-2xl font-bold text-gray-900">
            {coefficients.sqft.toFixed(2)}
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Bedrooms (β₂)</p>
          <p className="text-2xl font-bold text-gray-900">
            {coefficients.bedrooms.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoefficientsGrid;
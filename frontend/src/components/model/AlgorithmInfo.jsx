const AlgorithmInfo = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Algorithm Details</h3>
      <div className="space-y-2 text-sm text-gray-700">
        <p><strong>Algorithm:</strong> Multiple Linear Regression</p>
        <p><strong>Method:</strong> Ordinary Least Squares (OLS)</p>
        <p><strong>Features:</strong> Square Footage, Number of Bedrooms</p>
        <p><strong>Target:</strong> House Price (USD)</p>
        <p><strong>Library:</strong> mathjs for matrix operations</p>
      </div>
    </div>
  );
};

export default AlgorithmInfo;
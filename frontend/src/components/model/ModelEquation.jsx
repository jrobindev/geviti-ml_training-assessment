const ModelEquation = ({ equation }) => {
  if (!equation) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <p className="text-sm font-medium text-blue-800 mb-2">Regression Equation</p>
      <code className="text-sm text-blue-900 font-mono">
        {equation}
      </code>
    </div>
  );
};

export default ModelEquation;
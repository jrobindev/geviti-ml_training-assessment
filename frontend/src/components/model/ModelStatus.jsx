const ModelStatus = ({ trained }) => {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <div className="flex items-center">
        <span className="text-2xl mr-3">✅</span>
        <div>
          <p className="font-semibold text-green-900">
            Model Status: {trained ? 'Trained' : 'Not Trained'}
          </p>
          <p className="text-sm text-green-700">
            {trained ? 'Ready for predictions' : 'Model is being trained'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelStatus;
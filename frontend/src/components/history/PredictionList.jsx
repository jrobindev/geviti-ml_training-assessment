import PredictionCard from './PredictionCard';

const PredictionList = ({ predictions }) => {
  return (
    <div className="space-y-4">
      {predictions.map((prediction) => (
        <PredictionCard key={prediction.id} prediction={prediction} />
      ))}
    </div>
  );
};

export default PredictionList;
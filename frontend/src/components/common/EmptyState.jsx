const EmptyState = ({ title, message }) => {
  return (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg">{title}</p>
      <p className="text-gray-400 text-sm mt-2">{message}</p>
    </div>
  );
};

export default EmptyState;
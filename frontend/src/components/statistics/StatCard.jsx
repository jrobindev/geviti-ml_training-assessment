const StatCard = ({ title, value, subtitle, color = 'blue' }) => {
  const colorClasses = {
    blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-800 text-blue-900',
    green: 'from-green-50 to-green-100 border-green-200 text-green-800 text-green-900',
    purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-800 text-purple-900',
    yellow: 'from-yellow-50 to-yellow-100 border-yellow-200 text-yellow-800 text-yellow-900',
    pink: 'from-pink-50 to-pink-100 border-pink-200 text-pink-800 text-pink-900',
    indigo: 'from-indigo-50 to-indigo-100 border-indigo-200 text-indigo-800 text-indigo-900',
  };

  const [bgClass, borderClass, textClass, valueClass] = colorClasses[color].split(' ');

  return (
    <div className={`bg-gradient-to-br ${bgClass} border ${borderClass} p-6 rounded-lg`}>
      <p className={`text-sm font-medium ${textClass} mb-2`}>{title}</p>
      <p className={`text-3xl font-bold ${valueClass}`}>{value}</p>
      {subtitle && (
        <p className={`text-xs ${textClass} mt-1`}>{subtitle}</p>
      )}
    </div>
  );
};

export default StatCard;
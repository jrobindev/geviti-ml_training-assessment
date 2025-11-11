const Navigation = ({ activeView, onViewChange }) => {
  const navItems = [
    { id: 'predict', label: 'Predict', icon: '🏠' },
    { id: 'history', label: 'History', icon: '📋' },
    { id: 'stats', label: 'Statistics', icon: '📊' },
    { id: 'model', label: 'Model Info', icon: '🤖' },
  ];

  return (
    <nav className="flex space-x-1 border-t border-gray-200 mt-4">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onViewChange(item.id)}
          className={`flex items-center space-x-2 px-4 py-3 font-medium transition-colors ${
            activeView === item.id
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
          }`}
        >
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
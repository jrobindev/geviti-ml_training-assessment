import { useState } from 'react';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import PredictView from './components/views/PredictView';
import HistoryView from './components/views/HistoryView';
import StatisticsView from './components/views/StatisticsView';
import ModelInfoView from './components/views/ModelInfoView';

function App() {
  const [activeView, setActiveView] = useState('predict');

  const renderView = () => {
    switch (activeView) {
      case 'predict':
        return <PredictView />;
      case 'history':
        return <HistoryView />;
      case 'stats':
        return <StatisticsView />;
      case 'model':
        return <ModelInfoView />;
      default:
        return <PredictView />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
          <Navigation activeView={activeView} onViewChange={setActiveView} />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderView()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
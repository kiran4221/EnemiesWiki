import { Routes, Route } from 'react-router-dom';
import EnemiesHomePage from './pages/EnemiesHomePage';
import EnemiesCard from './components/EnemiesCard';
import EnemySearchResults from './components/EnemySearchResults';

function App() {
  return (
      <Routes>
        <Route path="/" element={<EnemiesHomePage />} />
        <Route path="/enemiesCard" element={<EnemiesCard />} />
        <Route path="/enemySearchResults" element={<EnemySearchResults />} />
      </Routes>
  );
}

export default App;

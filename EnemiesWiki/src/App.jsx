import { Routes, Route } from 'react-router-dom';
import EnemiesHomePage from './pages/EnemiesHomePage';
import EnemiesCard from './components/EnemiesCard';

function App() {
  return (
      <Routes>
        <Route path="/" element={<EnemiesHomePage />} />
        <Route path="/enemiesCard" element={<EnemiesCard />} />
      </Routes>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Pizza from './pages/Pizza/Pizza'
import Burger from './pages/Burger/Burger'
import Pasta from './pages/Pasta/Pasta'
import Salad from './pages/Salad/Salad'
import AllItems from './pages/AllItems/AllItems';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allitems" element={<AllItems />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/pasta" element={<Pasta />} />
        <Route path="/salad" element={<Salad />} />
        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

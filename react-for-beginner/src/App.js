import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/react-for-beginner" element={<Home />} />
        <Route path="/react-for-beginner/movie" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ResultsPage from './pages/ResultsPage.jsx';
import './App.css';

function App() {
  const [analysisData, setAnalysisData] = useState(null);

  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage setAnalysisData={setAnalysisData} />} />
          <Route path="/results" element={<ResultsPage analysisData={analysisData} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

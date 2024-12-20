import React, { useState } from 'react';
import './HomePage.css';

function HomePage() {
  const [trainingData, setTrainingData] = useState('');

  const handleAnalyze = () => {
    console.log('Training Data:', trainingData);
    // Here cthe API or navigate to the results page with the data
  };

  return (
    <div className="home-page">
      <h1>Hey</h1>
      <textarea
        value={trainingData}
        onChange={(e) => setTrainingData(e.target.value)}
        placeholder="Paste your workout here..."
      />
      <button onClick={handleAnalyze}>Analyze</button>
    </div>
  );
}

export default HomePage;

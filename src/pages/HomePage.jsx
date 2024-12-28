import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage({ setAnalysisData }) {
  const [trainingData, setTrainingData] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    if (!trainingData.trim()) {
      alert('Please paste your workout data to analyze.');
      return;
    }

    setLoading(true);

    try {
//* REEMPLAZAR con clave de API
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer YOUR_API_KEY`, 
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: `Analyze this workout and provide insights: ${trainingData}`,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch analysis from API');
      }

      const data = await response.json();
      const analysisResults = JSON.parse(data.choices[0].text);

      setAnalysisData(analysisResults);
      navigate('/results');
    } catch (error) {
      console.error('Error analyzing training data:', error);
      alert('Failed to analyze the workout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      <h1>Hey,</h1>
      <textarea
        value={trainingData}
        onChange={(e) => setTrainingData(e.target.value)}
        placeholder="Paste your workout here..."
        disabled={loading}
      />
      <button onClick={handleAnalyze} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>
    </div>
  );
}

export default HomePage;

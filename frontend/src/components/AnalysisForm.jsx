import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnalysisForm = ({ onAnalyze }) => {
  const [workoutInput, setWorkoutInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workoutInput.trim()) {
      onAnalyze(workoutInput); 
      setWorkoutInput('');
      navigate('/results'); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Introduce tu workout"
        value={workoutInput}
        onChange={(e) => setWorkoutInput(e.target.value)}
      />
      <button type="submit">Analizar</button>
    </form>
  );
};

export default AnalysisForm;

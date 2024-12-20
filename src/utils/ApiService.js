const API_URL = 'https://api.openai.com/v1/completions';

export const analyzeTrainingData = async (trainingData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Use an environment variable for the API key
    },
    body: JSON.stringify({
      prompt: `Analyze this training data: ${trainingData}`,
      max_tokens: 150, // Adjust based on your API's needs
    }),
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return await response.json();
};

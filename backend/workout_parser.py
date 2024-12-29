import openai
import json
from flask import Flask, request, jsonify
from decouple import config

class WorkoutParser:
    def __init__(self, api_key):
        self.client = openai.OpenAI(api_key=api_key)

    def read_prompt(self):
        with open('prompt.txt', 'r') as file:
            prompt = file.read()
            return prompt
        
    def openai_prompt(self,prompt):
        try:
            # Call OpenAI API
            response = self.client.chat.completions.create(
                model="gpt-4o",
                messages=[{"role": "user", "content": prompt}]
            )
            
            # Extract and return the response content
            content = response.choices[0].message.content
            if content.startswith("```json"):
                content = content[7:-4].strip()
            json_content = json.loads(content)
            return json_content
        except Exception as e:
            print(f"Error: {e}")
            return None

    def parse_workout(self, wod):
        # Define the prompt
        prompt = self.read_prompt()
        interpolated_prompt = prompt.format(wod_description=wod)
        return self.openai_prompt(interpolated_prompt)

app = Flask(__name__)

@app.route('/parse_workout', methods=['POST'])
def parse_workout():
    data = request.get_json()
    wod_description = data.get('wod')
    
    api_key = config('OPENAI_API_KEY')
    parser = WorkoutParser(api_key)
    result = parser.parse_workout(wod_description)
    
    json_response = jsonify(result)
    return json_response

if __name__ == '__main__':
    app.run(debug=True)
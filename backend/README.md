# **Workout Parser Backend**

## **Overview**
This Python backend application uses Flask and OpenAI's GPT-4 model to parse workout descriptions into structured JSON data. It provides a REST API for clients to send workout descriptions and receive parsed results.

---

## **Features**
- Parses workout descriptions into structured JSON format.
- Uses OpenAI's GPT-4 model for natural language understanding.
- Environment variable support via `python-decouple`.

---

## **Technologies Used**
- **Python**: Backend logic.
- **Flask**: Web framework for API creation.
- **OpenAI API**: AI-powered workout parsing.
- **python-decouple**: Manage environment variables securely.

---

## **Setup Instructions**

### **Prerequisites**
- Python 3.8 or later.
- An OpenAI API key.
- Flask installed.

### **Installation**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/workout-parser-backend.git
   cd workout-parser-backend
   ```

2. **Set up a virtual environment** (recommended):
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**:
   - Create a `.env` file in the root directory.
   - Add your OpenAI API key:
     ```
     OPENAI_API_KEY=your_openai_api_key
     ```

---

## **Usage**

### **Running the Application**
1. Start the Flask server:
   ```bash
   python app.py
   ```
2. The API will be available at `http://127.0.0.1:5000`.

---

### **API Endpoint**
#### **`POST /parse_workout`**
Parses a workout description into JSON format.

- **Request**:
  - **Headers**: `Content-Type: application/json`
  - **Body**:
    ```json
    {
      "wod": "Workout description here"
    }
    ```

- **Response**:
  - **200 OK**:
    ```json
    {
      "parsed_workout": { ... }
    }
    ```

- **Error Example**:
  - **500 Internal Server Error** (if API fails):
    ```json
    {
      "error": "Error message here"
    }
    ```

---

## **Prompt File**
The application uses a `prompt.txt` file to structure requests to OpenAI. Make sure `prompt.txt` exists in the root directory and contains the required prompt format:
```
Parse the following workout description into JSON format:
{wod_description}
```

---

## **Development Notes**
- **Debug Mode**: The app runs in debug mode by default. For production, disable debug mode and configure a production-ready server like Gunicorn or uWSGI.
- **Environment Variables**: Use `python-decouple` for secure management of secrets.

---

## **Future Enhancements**
- Add authentication to secure the API.
- Implement rate limiting to prevent abuse.
- Extend parsing logic for additional workout formats.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---

## **Contributing**
Contributions are welcome! Please submit a pull request or open an issue for improvements or bug fixes.
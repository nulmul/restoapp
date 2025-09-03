from flask import Flask, request, jsonify
from flask_cors import CORS
from gradio_client import Client
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Initialize Gradio client
client = Client("https://eyadomi-eyadgpt.hf.space")

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        message = data.get('message', '')
        
        if not message:
            return jsonify({'error': 'Message is required'}), 400
        
        # Call your Gradio API
        result = client.predict(message, api_name="/predict")
        
        return jsonify({'response': result})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
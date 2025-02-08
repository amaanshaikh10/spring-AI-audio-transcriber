# spring-AI-audio-transcriber

This is a simple audio-to-text transcription service built using **Spring Boot** for the backend and **React** for the frontend. It utilizes **OpenAI's audio transcription API** to convert uploaded audio files into text.

## Features
- Upload an audio file from the frontend.
- Backend processes the file using OpenAI's transcription service.
- Returns the transcribed text as output.
- Supports CORS for frontend-backend communication.

## Technologies Used
### Backend (Spring Boot)
- **Spring Boot 3**
- **Spring AI**
- **OpenAI API**
- **Spring Web MVC**
- **Multipart File Upload**

### Frontend (React)
- **React.js**
- **Axios**
- **Tailwind CSS** (for styling)

---

## Setup Instructions

### Prerequisites
- Java 17 or later
- Node.js and npm
- OpenAI API key

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/audio-transcription-service.git
   cd audio-transcription-service/backend
   ```
2. Set up environment variables or modify `application.properties`:
   ```properties
   spring.ai.openai.api-key=your_openai_api_key
   server.port=8080
   ```
3. Build and run the application:
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm run dev
   ```


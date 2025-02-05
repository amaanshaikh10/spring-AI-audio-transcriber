import { useState } from "react";
import axios from "axios";

const AudioUploader = () => {
  const [file, setFile] = useState(null);
  const [transcription, setTranscription] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData(); // ✅ Fixed "fromData" -> "FormData"
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:9090/api/transcribe", // ✅ Fixed "loacalhost" -> "localhost"
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // ✅ Fixed "multipart/fromData" -> "multipart/form-data"
          },
        }
      );
      setTranscription(response.data);
    } catch (error) {
      console.error("Error transcribing audio:", error);
    }
  };

  return (
    <div className="container">
      <h1>Audio To Text Transcriber</h1>
      <div className="file-input">
        <input type="file" accept="audio/*" onChange={handleFileChange} />
      </div>
      <button className="upload-button" onClick={handleUpload}>
        Upload and Transcribe
      </button>
      <div className="transcription-result">
        <h3>Transcription Result</h3>
        <p>{transcription}</p>
      </div>
    </div>
  );
};

export default AudioUploader;

import React, { useState } from "react";
import axios from "axios";

const Index = () => {
  const [url, setUrl] = useState("");
  const [miniUrl, setMiniUrl] = useState("");

  const handleGenerateMiniUrl = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/url/create", {
        url: url,
      });

      setMiniUrl(response.data.url.miniUrl);
    } catch (error) {
      console.error("Error generando Mini URL:", error.message);
    }
  };
console.log(miniUrl)
  return (
    <>
      <div>
        <h1>Generador de Mini URL</h1>
        <label>
          Ingresa la URL:
          <input
          placeholder="https://www.ejemplo.com/"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button onClick={handleGenerateMiniUrl}>Generar Mini URL</button>
        {miniUrl && (
          <div>
            <p>Esta es la Mini URL:</p>
            <a href={miniUrl} target="_blank" rel="noopener noreferrer">
              {miniUrl}
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;

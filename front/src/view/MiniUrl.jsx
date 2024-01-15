import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MiniUrl = () => {
  const { id } = useParams();
  const [originalUrl, setOriginalUrl] = useState(null);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/url/${id}`);
       
        setOriginalUrl(response.data.url);
      } catch (error) {
        console.error("Error fetching URL:", error.message);
      }
    };

    fetchUrl();
  }, [id]);

  useEffect(() => {
    if (originalUrl) {
      setTimeout(() => {
        window.location.href = originalUrl;
      }, 2000);
    }
  }, [originalUrl]);


  return (
    <>
      <div>Redireccionando a la URL correspondiente...</div>
    </>
  );
};

export default MiniUrl;

// Analysis.js
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import NewsData from './NewsData';
import Question from './Question';

const Analysis = () => {
  const [linksData, setLinksData] = useState([]);

  const fetchLinks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/question/read');
      setLinksData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  return (
    <div>
      <Question onLinkSubmit={fetchLinks} />
      <NewsData linksData={linksData} />
    </div>
  );
};



export default Analysis;

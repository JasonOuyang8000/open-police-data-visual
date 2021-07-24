import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const getResponse = async () => {
    try {
      const response = await axios.get('https://openpolice.org/api/all/complaint/xml?limit=20&start=0', { headers: { 'Access-Control-Allow-Origin': '*' } });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getResponse();
  }, []);

  return (
    <div />
  );
};

export default App;

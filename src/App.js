import React, { useEffect } from 'react';
import axios from 'axios';
import convert from 'xml-js';

const App = () => {
  const getResponse = async () => {
    try {
      const response = await axios.get(process.env.API_URL, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/xml',
        },
        params: {
          start: 0,
          limit: 20,
        },
      });
      const data = JSON.parse(
        convert.xml2json(response.data, { compact: true, spaces: 2 }),
      );
      console.log(data);
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

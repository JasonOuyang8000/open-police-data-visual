import React, { useEffect, useState } from 'react';
import data from './assets/data.json';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    setTotalData(data);
  }, []);

  console.log(data);
  return (
    <div />
  );
};

export default App;

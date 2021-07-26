import React, { useEffect, useState } from 'react';
import data from './assets/data.json';
import './style.scss';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    setTotalData(data);
  }, []);

  console.log(data);
  return (
    data.length
    && (
    <div className="full-width">
      hello
    </div>
    )
  );
};

export default App;

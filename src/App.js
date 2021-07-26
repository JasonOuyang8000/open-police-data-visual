import React, { useEffect, useState } from 'react';
import data from './assets/data.json';
import './style.scss';
import 'bootstrap/scss/bootstrap.scss';
import BarGraph from './BarGraph';
import { getAmountCharged, getStatus } from './helpers';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    setTotalData(data);
  }, []);
  console.log(totalData);

  return (
    totalData.length > 0
    && (
    <div className="full-width">
      <div className="container p-5">
        <div className="row">
          <div className="col-12 col-md-4 p-5">
            <BarGraph data={getAmountCharged(totalData)} color="#ddd8b8" title="Results" />
          </div>
          <div className="col-12 col-md-8 p-5">
            <BarGraph data={getStatus(totalData, 'com_status')} color="#84A9C0" title="Status" />
          </div>
        </div>
      </div>
    </div>
    )
  );
};

export default App;

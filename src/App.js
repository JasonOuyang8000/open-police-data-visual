import React, { useEffect, useState } from 'react';
import data from './assets/data.json';
import './style.scss';
import 'bootstrap/scss/bootstrap.scss';
import BarGraph from './BarGraph';
import {
  getAmountCharged, getStatus, getStatusAlleged,
} from './helpers';
import HBarGraph from './HBarGraph';
import TimeGraph from './TimeGraph';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    setTotalData(data);
  }, []);

  console.log(totalData);
  console.log(getStatus(totalData, 'com_record_submitted'));

  return (
    totalData.length > 0
    && (
    <div className="full-width">
      <div className="container p-2">
        <h1 className="text-center mb-5">Open Police Data Visualization</h1>
        <div className="row">
          <div className="col-12 col-md-4 p-2">
            <BarGraph data={getAmountCharged(totalData)} color="#ddd8b8" title="Results" />
          </div>
          <div className="col-12 col-md-8 p-2">
            <BarGraph data={getStatus(totalData, 'com_status')} color="#84A9C0" title="Status" />
          </div>
          <div className="col-12 mt-5">
            <HBarGraph data={getStatusAlleged(totalData, 'com_alleg_list')} color="#6A66A3" title="Types of Allegations" />
          </div>
          <div className="col-12 mt-5">
            <TimeGraph data={getStatus(totalData, 'com_record_submitted')} color="#B3CBB9" title="Types of Allegations" />
          </div>
        </div>
      </div>
    </div>
    )
  );
};

export default App;

import {
  XYPlot,
  XAxis,
  YAxis,
  LineSeries,
  makeWidthFlexible,
} from 'react-vis';
import React from 'react';
import '../node_modules/react-vis/dist/style.css';
import moment from 'moment';

const TimeGraph = ({ data, color }) => {
  const FlexibleXYPlot = makeWidthFlexible(XYPlot);
  // eslint-disable-next-line no-param-reassign
  const newData = data.map((d) => (
    {
      x: new Date(d.x),
      y: d.y,
    }
  ));

  newData.sort((objX, objY) => objX.x.getTime() - objY.x.getTime());

  console.log(newData);
  return (
    <>
      <h3 className="mb-5 text-center">Submission Activity</h3>
      <FlexibleXYPlot
        xType="time"
        height={500}
      >
        <LineSeries
          className="linemark-series-example"
          style={{
            strokeWidth: '2px',
            fill: '#ebf5ed',
          }}
          size={1}
          data={newData}
          color={color}
          curve="curveMonotoneX"

        />
        <XAxis
          tickTotal={12}
          tickFormat={(v) => moment(v).format('MM/DD/YYYY')}
        />
        <YAxis size={5} title="Amount of Submissions" />
      </FlexibleXYPlot>
    </>
  );
};

export default TimeGraph;

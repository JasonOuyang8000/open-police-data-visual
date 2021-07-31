/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  DiscreteColorLegend, XYPlot, GradientDefs, linearGradient, AreaSeries, RadialChart, makeWidthFlexible, Hint,
} from 'react-vis';

const CircleGraph = ({ data }) => {
  const dataTotal = data.reduce((prev, curr) => prev + Object.values(curr)[1], 0);

  const colors = ['0FA3B1', 'B5E2FA', 'F9F7F3', 'EDDEA4', '28FFBF', '64C9CF', 'FDEFEF', 'FFB740', 'DF711B'];
  const formatData = data.map((d, i) => ({
    label: Object.values(d)[0],
    subLabel: `${Object.values(d)[0]} : ${((Object.values(d)[1] / dataTotal) * 100).toFixed(2)}%`,
    angle: Object.values(d)[1],
    color: `#${colors[i]}`,
  }));
  console.log(formatData);
  console.log(dataTotal);
  const ITEMS = data.map((d, i) => ({ title: `${Object.values(d)[0]} : ${((Object.values(d)[1] / dataTotal) * 100).toFixed(2)}%`, color: `#${colors[i]}`, strokeWidth: '20' }));
  const [value, setValue] = useState(null);

  return (

    <div className="d-flex align-items-center justify-content-center">
      <RadialChart
        data={formatData}
        height={600}
        width={600}
        style={{ stroke: '#fff', strokeWidth: '1' }}
        colorType="literal"
        onValueMouseOver={(v) => setValue({ ...v, percent: v.subLabel, label: v.label })}
        labelsAboveChildren
      >
        {value && (
        <Hint animation align={{ vertical: 'auto', horizontal: 'bottom' }} value={value} style={{ fontSize: 20 }}>
          <div className="p-3" style={{ fontSize: 12, color: '#fff', background: 'black' }}>
            {' '}
            {value.percent}
            {' '}
          </div>
        </Hint>
        )}

      </RadialChart>

      <DiscreteColorLegend height={500} width={600} items={ITEMS} style={{ fontSize: 20 }} />
    </div>

  );
};

export default CircleGraph;

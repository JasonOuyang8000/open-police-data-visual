/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  DiscreteColorLegend, XYPlot, GradientDefs, linearGradient, AreaSeries, RadialChart, makeWidthFlexible, Hint,
} from 'react-vis';

const CircleGraph = ({ data }) => {
  const dataTotal = data.reduce((prev, curr) => prev + Object.values(curr)[1], 0);

  const formatData = data.map((d) => ({
    label: Object.values(d)[0],
    subLabel: ((Object.values(d)[1] / dataTotal) * 100).toFixed(2),
    angle: Object.values(d)[1],
  }));

  console.log(dataTotal);
  const ITEMS = data.map((d) => (Object.values(d)[0]));
  const [value, setValue] = useState(null);

  return (

    <div className="d-flex align-items-center justify-content-center">
      <RadialChart
        data={formatData}
        height={600}
        width={600}
        animation
        onValueMouseOver={(v) => setValue(v)}
        labelsAboveChildren
      >
        {value && <Hint value={value} /> }

      </RadialChart>

      <DiscreteColorLegend height={350} width={200} items={ITEMS} />
    </div>

  );
};

export default CircleGraph;

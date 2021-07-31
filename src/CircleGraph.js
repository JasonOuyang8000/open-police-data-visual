/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  DiscreteColorLegend, XYPlot, GradientDefs, linearGradient, AreaSeries, RadialChart, makeWidthFlexible,
} from 'react-vis';

const CircleGraph = ({ data }) => {
  const formatData = data.map((d) => ({
    label: Object.values(d)[0],
    angle: Object.values(d)[1],
  }));

  const ITEMS = data.map((d) => (Object.values(d)[0]));

  console.log(formatData);

  return (
    data && (
      <div className="d-flex align-items-center justify-content-center">
        <RadialChart
          data={formatData}
          height={600}
          width={600}
          animation
          labelsAboveChildren
        />
        <DiscreteColorLegend height={350} width={200} items={ITEMS} />
      </div>
    )
  );
};

export default CircleGraph;

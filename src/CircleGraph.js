import React from 'react';
import {
  XYPlot, GradientDefs, linearGradient, AreaSeries,
} from 'react-vis';

const CircleGraph = () => (
  <XYPlot width={300} height={300}>
    <GradientDefs>
      <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="red" stopOpacity={0.4} />
        <stop offset="100%" stopColor="blue" stopOpacity={0.3} />
      </linearGradient>
    </GradientDefs>
    <AreaSeries
      color="url(#CoolGradient)"
      data={[
        { x: 1, y: 10, y0: 1 },
        { x: 2, y: 25, y0: 5 },
        { x: 3, y: 15, y0: 3 },
      ]}
    />
  </XYPlot>
);

export default CircleGraph;

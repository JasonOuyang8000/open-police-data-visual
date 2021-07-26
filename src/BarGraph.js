/* eslint-disable no-unused-vars */
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  makeWidthFlexible,
} from 'react-vis';
import '../node_modules/react-vis/dist/style.css';
import React from 'react';

const BarGraph = ({ data, color, title }) => {
  const FlexibleXYPlot = makeWidthFlexible(XYPlot);
  const labelData = data.map((d, idx) => ({
    x: d.x,
    y: d.y,
  }));
  return (
    <>
      <h3 style={{ color }} className="mb-5 text-center">{title}</h3>
      <FlexibleXYPlot
        xType="ordinal"
        height={300}
        xDistance={100}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries
          data={data}
          color={color}
        />
      </FlexibleXYPlot>
    </>
  );
};

export default BarGraph;

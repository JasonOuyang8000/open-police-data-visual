/* eslint-disable no-unused-vars */
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
  makeWidthFlexible,
} from 'react-vis';
import '../node_modules/react-vis/dist/style.css';
import React from 'react';

const HBarGraph = ({ data, color, title }) => {
  const FlexibleXYPlot = makeWidthFlexible(XYPlot);

  return (
    <>
      <h3 style={{ color }} className="mb-5 text-center">{title}</h3>
      <FlexibleXYPlot
        height={500}
        yType="ordinal"
        margin={{ left: 150 }}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <HorizontalBarSeries
          data={data}
          color={color}
        />
      </FlexibleXYPlot>
    </>
  );
};

export default HBarGraph;

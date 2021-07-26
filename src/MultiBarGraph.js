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
  LabelSeries,
} from 'react-vis';
import React from 'react';

const MultipleBarGraph = ({
  dataOne, dataTwo, colorOne, colorTwo,
}) => {
  const FlexibleXYPlot = makeWidthFlexible(XYPlot);
  return (
    <>
      <h1 className="text-center">Officers Identified</h1>
      <FlexibleXYPlot xType="ordinal" height={600} xDistance={100}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries className="vertical-bar-series-example" data={dataOne} color={colorOne} />
        <VerticalBarSeries data={dataTwo} color={colorTwo} />
        <LabelSeries getLabel={(d) => d.x} />
      </FlexibleXYPlot>
    </>
  );
};

export default MultipleBarGraph;

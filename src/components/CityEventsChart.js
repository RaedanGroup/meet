// src/components/CityEventsChart.js

import React, { useState, useEffect } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Text
} from 'recharts';

// Custom tick component
const CustomTick = (props) => {
  const { x, y, payload } = props;

  // Adjustments for custom alignment
  const customX = x + 5; // Adjust the coordinate by adding value
  const customY = y + 5;

  // Return a group element with a Text component as its child
  return (
    <g transform={`translate(${customX},${customY})`}>
      <Text
        // Set the angle, textAnchor, and verticalAnchor props
        angle={60}
        textAnchor="start"
        verticalAnchor="start"
        fill="#30353B"
      >
        {payload.value}
      </Text>
    </g>
  );
};

const CityEventsChart = ({ allLocations, events }) => {
  const [data, setData] = useState([]);

  // useEffect hook to update the data state when the events prop changes
  useEffect(() => {
    setData(getData());
  }, [events]);

  // Returns an array of event location and count objects
  const getData = () => {
    const data = allLocations.map((location) => {
      const count = events.filter((event) => event.location === location).length;
      const city = location.split(/, | - /)[0]; // Use regex to split the location string
      return { city, count };
    });
    return data;
  };

  // Custom shape component for scatter dots
  const CustomScatterShape = (props) => {
    const { cx, cy } = props;
    // Return a diamond polygon
    return <polygon points={`${cx-5},${cy} ${cx},${cy-10} ${cx+5},${cy} ${cx},${cy+10}`} fill="#D9D9D9" />;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 70,
          left: -30,
        }}
      >
        <CartesianGrid fill="#6F2F2F"/>
        <XAxis
          type="category"
          dataKey="city"
          name="City"
          interval={0}
          tick={<CustomTick />} // Use the CustomTick component as the tick prop
        />
        <YAxis type="number" dataKey="count" name="Number of events" allowDecimals={false} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="City events" data={data} fill="#C77A66" shape={<CustomScatterShape />} />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default CityEventsChart;
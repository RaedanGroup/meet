// src/components/EventGenresChart.js

import React from 'react';
import { useState, useEffect } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const EventGenresChart = ({ events }) => {
// Create a new local state named data
const [data, setData] = useState([]);
const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

// Use the useEffect hook to update the data state when the events prop changes
useEffect(() => {
  setData(() => getData());
}, [`${events}`]);

// Create a function that returns an array of objects
const getData = () => {
  const data = genres.map(genre => {
    const value = events.filter(event => event.summary.includes(genre)).length;
    return { name: genre, value };
  });

  return data;
}

// Array of colors
const colors = ['#6F2F2F', '#30353B', '#7D8179', '#E3D4A5', '#C77A66'];

// Creates and returns a customized label
const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius;
  const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
  const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;

  // Use the `index` to get the color from the `colors` array
  const fillColor = colors[index % colors.length];

  return percent ? (
    <text
      x={x}
      y={y}
      fill={fillColor} // Use the `fillColor` variable to set the color
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontWeight="bold"
      fontSize={15}
    >
      {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
    </text>
  ) : null;
};

// Return a ResponsiveContainer component with a PieChart component as its child
  return (
    <ResponsiveContainer width="99%" height={400} className="non-interactive-chart">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius="60%"
          innerRadius="40%"
        >
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))
          }
        </Pie>

      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenresChart;
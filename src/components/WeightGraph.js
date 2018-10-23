import React, { Component } from 'react';
import format from 'date-fns/format';
import {
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  ResponsiveContainer
} from 'recharts';

class WeightGraph extends Component {

  render () {
    const data = this.props.weights
      .sort((a, b) => a.createdAt - b.createdAt)
      .map(({createdAt, value}) => ({
        createdAt: format(createdAt, 'DD/MM/YY'),
        weight: value
      }));

    return (
      <ResponsiveContainer 
        height={150} 
        className="appear">
        <BarChart 
          width={200}
          height={300}
          data={data}
          maxBarSize={15}
          margin={{
            top: 5, 
            right: 5, 
            left: 5, 
            bottom: 5
          }}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis 
            dataKey="createdAt" 
            width={40}
          />
          <YAxis width={30}/>
          <Tooltip/>
          <Bar 
            unit="kg" 
            dataKey="weight" 
            fill="#8884d8" 
            fill="#393939"/>
        </BarChart>
      </ResponsiveContainer>
    );
  }  
}

export default WeightGraph;
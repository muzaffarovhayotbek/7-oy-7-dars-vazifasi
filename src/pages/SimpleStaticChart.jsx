import React from 'react';
import LineChart from '../components/BarChart';
import './SimpleStaticChart.css';
import { NavLink } from 'react-router-dom';

function SimpleStaticChart() {
  return (
    <div className="title container">
      <div className="title-main">
        <NavLink to="/lineChart">Line chart</NavLink>
        <NavLink to="/lineChart">Bar chart</NavLink>
        <NavLink to="/line">pie chart</NavLink>
      </div>
      <h3>Oylik savdo hajmi</h3>
      <LineChart />
    </div>
  );
}

export default SimpleStaticChart;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MainLayouts from './layouts/MainLayouts';
import SimpleStaticChart from './pages/SimpleStaticChart';
import DynamicData from './pages/DynamicData';
import LineChart from './pages/LineChart';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayouts>
              <Home />
            </MainLayouts>
          }
        ></Route>
        <Route
          path="/SimpleStaticChart"
          element={
            <MainLayouts>
              <SimpleStaticChart></SimpleStaticChart>
            </MainLayouts>
          }
        ></Route>
        <Route
          path="/DynamicData"
          element={
            <MainLayouts>
              <DynamicData></DynamicData>
            </MainLayouts>
          }
        ></Route>
        <Route
          path="/LineChart"
          element={
            <MainLayouts>
              <LineChart />
            </MainLayouts>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

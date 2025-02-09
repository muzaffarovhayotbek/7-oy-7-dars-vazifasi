import React, { useState } from 'react';
import './DynamicData.css';
import DynamicDataChart from '../components/DynamicDataChart';

function DynamicData() {
  const [information, setInformation] = useState('');
  const [data, setData] = useState([{ month: 'Yanvar', sales: 4000 }]);

  function handleSave() {
    if (information.trim()) {
      setData([...data, { month: information, sales: 0 }]);
      setInformation('');
    }
  }

  return (
    <div>
      <div className="container dynamicData">
        <label>Dinamik Ma'lumotlar bilan Ishlash</label>
        <input
          value={information}
          onChange={(e) => setInformation(e.target.value)}
          type="text"
          placeholder="Enter information"
        />
        <input type="number" placeholder="Enter month" />
        <button onClick={handleSave}>Enter</button>
      </div>
      <DynamicDataChart />
      <ul>
        {data.map((info, index) => (
          <li key={index}>{info.month}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicData;

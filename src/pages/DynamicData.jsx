import React, { useState } from 'react';
import DynamicDataChart from '../components/DynamicDataChart';
import './DynamicData.css';

function DynamicData() {
  const [month, setMonth] = useState('');
  const [sales, setSales] = useState('');
  const [data, setData] = useState([
    { month: 'Jan', sales: 2.3 },
    { month: 'Feb', sales: 3.1 },
    { month: 'Mar', sales: 4.0 },
    { month: 'Apr', sales: 10.1 },
    { month: 'May', sales: 4.0 },
    { month: 'Jun', sales: 3.6 },
    { month: 'Jul', sales: 3.2 },
    { month: 'Aug', sales: 2.3 },
    { month: 'Sep', sales: 1.4 },
    { month: 'Oct', sales: 0.8 },
    { month: 'Nov', sales: 0.5 },
    { month: 'Dec', sales: 0.2 },
  ]);

  function handleSave() {
    if (month.trim() && sales.trim() && !isNaN(sales)) {
      setData([...data, { month, sales: Number(sales) }]);
      setMonth('');
      setSales('');
    } else {
      alert("Iltimos, to'g'ri ma'lumot kiriting!");
    }
  }

  return (
    <div>
      <div className="container dynamicData">
        <label>Dinamik Ma'lumotlar bilan Ishlash</label>
        <input
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          type="text"
          placeholder="Oy nomini kiriting"
        />
        <input
          value={sales}
          onChange={(e) => setSales(e.target.value)}
          type="number"
          placeholder="Savdo hajmini kiriting"
        />
        <button onClick={handleSave}>Qo'shish</button>
      </div>

      {/* Dinamik chart */}
      <DynamicDataChart data={data} />
    </div>
  );
}

export default DynamicData;

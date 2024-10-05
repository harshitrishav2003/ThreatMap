import React, { useState } from 'react';
// import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MapComponent from './components/MapComponent';
import './styles.css';

function App() {
  const [attackData, setAttackData] = useState([]);

  const handleUpdateAttacks = (count) => {
    
    fetchAttackData(count);
  };

  const fetchAttackData = (count) => {
   
    const data = [/* attack data logic  */];
    setAttackData(data.slice(0, count));
  };

  return (
    <div id="container">
      {/* <Header /> */}
      <Sidebar handleUpdateAttacks={handleUpdateAttacks} />
      <MapComponent attackData={attackData} />
    </div>
  );
}

export default App;

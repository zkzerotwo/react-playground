
import React from 'react';
import './App.css';
import './composition/Split.css';
// import RouletteGun from './state-drills/RouletteGun'
import Bomb from './state-drills/Bomb'
// import HelloWorld from './state-drills/HelloWorld'
// const firstTooltip = (


function App() {
  return (
    <main className='App'>
      {/* <RouletteGun bulletInChamber={8} /> */}
      {/* <HelloWorld /> */}
      <Bomb />
    </main>
  );
}

export default App;
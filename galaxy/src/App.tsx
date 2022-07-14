import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StarSystem } from './StarSystem';
import { Star } from './Star';
import { Planet } from './Planet';

function App() {

  let erde: Planet = new Planet({
    xPosition: 300,
    yPosition: 150,
    height: 20,
    width: 20,
    radius: 30,
    mass: 0,
  })

  let sonne: Star = new Star({
    xPosition: 400,
    yPosition: 300,
    height: 20,
    width: 20,
    radius: 60,
    mass: 0,
    planets: [erde],
  })

  return (
    <div className="App">
      <StarSystem windowWidth={800} windowHeight={600} star={sonne}></StarSystem>
    </div>
  );
}

export default App;

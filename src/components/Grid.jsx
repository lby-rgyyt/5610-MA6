// Grid.js
import React, { useState } from 'react';
import Cell from './Cell.jsx';

export const GridContext = React.createContext();

function Grid() {
  const [cells, setCells] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const toggleCell = id => {
    setCells(prevCells => ({
      ...prevCells,
      [id]: !prevCells[id],
    }));
  };

  const countOnCells = () => {
    return Object.values(cells).filter(cell => cell).length;
  };

  return (
    <GridContext.Provider value={{ cells, toggleCell }}>
      <div className="grid">
        <div className="counter">Count: {countOnCells()}</div>
        <div className="row">
          <Cell id={0} />
          <Cell id={1} />
        </div>
        <div className="row">
          <Cell id={2} />
          <Cell id={3} />
        </div>
      </div>
    </GridContext.Provider>
  );
}

export default Grid;

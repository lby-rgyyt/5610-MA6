// Cell.jsx
import React, { useContext } from 'react';
import { GridContext } from './Grid';

function Cell({ id }) {
  const { cells, toggleCell } = useContext(GridContext);
  const backgroundColor = cells[id] ? 'black' : 'white';

  return (
    <div
      className="cell"
      style={{ backgroundColor }}
      onClick={() => toggleCell(id)}
    />
  );
}

export default Cell;

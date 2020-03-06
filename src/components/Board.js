import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

const Board = () => {
  const status = 'Next player: X';
  const renderSquare = (i) => {
    return <Square value={i}/>;
  };
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

Board.propTypes = {};

export default Board;

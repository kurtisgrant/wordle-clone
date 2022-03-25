import React from 'react';
import styled from 'styled-components';
import Row from './Row';

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  width: 100%;
  flex: 1.5;
`;

const StyledBoard = styled.div`
  display: grid;
  margin: 1rem 0 1rem;
  gap: .3rem;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  max-width: 300px;
`;

function Board({ word, guess, guesses }) {

  const rows = [];
  for (let i = 0; i < 6; i++) {
    if (i <= guesses.length - 1) {
      // Rows with submitted guesses
      rows.push(<Row key={i} row={i} word={word} guess={guesses[i]} confirmed />);
    } else if (i === guesses.length) {
      // Current guess row
      rows.push(<Row key={i} row={i} word={word} guess={guess} />);
    } else {
      // Empty rows
      rows.push(<Row key={i} row={i} word={word} guess="" />);
    }
  }

  return (
    <BoardWrapper>
      <StyledBoard>
        {rows}
      </StyledBoard>
    </BoardWrapper>
  );
}

export default Board;
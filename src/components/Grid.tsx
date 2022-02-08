import * as React from 'react'
import styled from 'styled-components'

import Cell from './Cell'
import CellSolver from './CellSolver'
import NewGameButton from './NewGameButton'
import HintButton from './HintButton'
import Score from './Score'
import Message from './Message'

import { useAppSelector } from '../app/hooks'

import { getScore, getBombs } from '../utils'

const Grid = () => {
  const board = useAppSelector((state) => state.minefield.board)

  const renderCell = (rowIndex: number, columnIndex: number) => <Cell currentCase={board[rowIndex][columnIndex]} />

  const renderCellSolver = (rowIndex: number, columnIndex: number, isRowSolver: boolean) => {
    const nbrBombs = getBombs(board, rowIndex, columnIndex, isRowSolver)
    const score = getScore(board, rowIndex, columnIndex, isRowSolver)
    return <CellSolver row={rowIndex} column={columnIndex} score={score} nbrBombs={nbrBombs} isRow={isRowSolver} />
  }

  const renderCellSolverLine = () => (
    <HorizontalContainer>{board[0].map((_, index) => renderCellSolver(0, index, false))}</HorizontalContainer>
  )

  const renderLine = (rowIndex: number) => (
    <HorizontalContainer>
      {board[rowIndex].map((_, index) => renderCell(rowIndex, index))}
      {renderCellSolver(rowIndex, 0, true)}
    </HorizontalContainer>
  )

  const renderBoard = () => board.map((_, index) => renderLine(index))

  return (
    <ScreenContainer>
      <NewGameButton />
      <Container>
        {renderBoard()}
        <HorizontalSolverContainer>{renderCellSolverLine()}</HorizontalSolverContainer>
      </Container>

      <HorizontalContainer>
        <Message />
        <HintButton />
        <Score />
      </HorizontalContainer>
    </ScreenContainer>
  )
}

export default Grid

const ScreenContainer = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  background-color: black;
`

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 700px;
  border: 1px solid blue;
`

const HorizontalContainer = styled('div')`
  display: flex;
  width: 700px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const HorizontalSolverContainer = styled('div')`
  display: flex;
  flex-direction: row;
  width: 620px;
  padding: 20px;
`

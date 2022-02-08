import * as React from 'react'
import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import bombIcon from '../Bomb_icon.png'

interface Props {
  currentCase: Case
}

const Cell = ({ currentCase }: Props) => {
  const dispatch = useAppDispatch()

  const currentGameStatus = useAppSelector((state) => state.minefield.gameStatus)
  const solverCases = useAppSelector((state) => state.minefield.solverCases)
  const cellState = useAppSelector((state) => state.minefield.board[currentCase.row][currentCase.column].cellStatus)
  const board = useAppSelector((state) => state.minefield.board)

  React.useEffect(() => {
    if (solverCases.length > 0) {
      dispatch({
        type: 'SET_HINT_STATS',
        payload: {
          row: currentCase.row,
          col: currentCase.column,
          hint: getHintsStats(currentCase.row, currentCase.column),
        },
      })
    }
  }, [solverCases])

  const getNumberOfHiddenCellInRow = (board: Case[][], row: number) =>
    board[row].reduce((acc, curr) => (curr.cellStatus === 'hidden' ? acc + 1 : acc), 0)

  const getNumberOfHiddenCellInCol = (board: Case[][], col: number) => {
    let counter = 0
    for (var i = 0; i < board.length; i++) {
      if (board[i][col].cellStatus === 'hidden') {
        counter += 1
      }
    }
    return counter
  }

  const getNbrBombsInARow = (row: number) => solverCases.find((sc) => sc.row === row && sc.isRow)?.nbrBombs
  const getNbrBombsInACol = (col: number) => solverCases.find((sc) => sc.column === col && !sc.isRow)?.nbrBombs

  const getRemainingScoreInARow = (board: Case[][], row: number) =>
    board[row].reduce((acc, curr) => (curr.cellStatus !== 'discovered' && !curr.isBomb ? acc + curr.score : acc), 0)

  const getRemainingScoreInACol = (board: Case[][], col: number) => {
    let counterCol = 0
    for (var i = 0; i < board[col].length; i++) {
      if (board[i][col].cellStatus !== 'discovered' && board[i][col].isBomb === false) {
        counterCol += board[i][col].score
      }
    }
    return counterCol
  }

  const getRiskOfBombs = (row: number, col: number, nbrHiddenCellRow: number, nbrHiddenCellCol: number) => {
    const nbrBombsInRow = getNbrBombsInARow(row)
    const nbrBombsInCol = getNbrBombsInACol(col)

    if (nbrBombsInRow === undefined || nbrBombsInCol === undefined) {
      return null
    }

    const riskRow = nbrBombsInRow / nbrHiddenCellRow
    const riskCol = nbrBombsInCol / nbrHiddenCellCol

    return riskRow * riskCol
  }

  const getPotentialScore = (row: number, col: number, nbrHiddenCellRow: number, nbrHiddenCellCol: number) => {
    const remainingScoreInARow = getRemainingScoreInARow(board, row)
    const remainingScoreInACol = getRemainingScoreInACol(board, col)

    const scoreRow = remainingScoreInARow / nbrHiddenCellRow
    const scoreCol = remainingScoreInACol / nbrHiddenCellCol

    return (scoreRow + scoreCol) / 2
  }

  const getHintsStats = (row: number, col: number) => {
    const nbrHiddenCellRow = getNumberOfHiddenCellInRow(board, row)
    const nbrHiddenCellCol = getNumberOfHiddenCellInCol(board, col)

    const riskBomb = getRiskOfBombs(row, col, nbrHiddenCellRow, nbrHiddenCellCol)
    const potentialScore = getPotentialScore(row, col, nbrHiddenCellRow, nbrHiddenCellCol)

    if (riskBomb === null || potentialScore === null) {
      return null
    }

    return {
      riskBomb: riskBomb,
      potentialScore: potentialScore,
      expectedValue: potentialScore * (1 - riskBomb),
    }
  }

  const updateHintOnRow = (row: number) =>
    board[row].map((cell, index) => {
      if (cell.cellStatus !== 'discovered') {
        const hintStats = getHintsStats(cell.row, cell.column)
        if (!!hintStats) {
          dispatch({
            type: 'SET_HINT_STATS',
            payload: { row: row, col: index, hint: hintStats },
          })
        }
      }
    })

  const updateHintOnCol = (col: number) => {
    for (var i = 0; i < board.length; i++) {
      if (board[i][col].cellStatus !== 'discovered') {
        const hintStats = getHintsStats(i, col)
        if (!!hintStats) {
          dispatch({
            type: 'SET_HINT_STATS',
            payload: { row: i, col: col, hint: hintStats },
          })
        }
      }
    }
  }

  const onClick = () => {
    if (currentGameStatus === 'ongoing') {
      dispatch({
        type: 'SET_CELL_STATUS',
        payload: { cellStatus: 'discovered', row: currentCase.row, column: currentCase.column },
      })

      if (currentCase.isBomb) {
        dispatch({ type: 'SET_GAME_STATUS', payload: 'lost' })
      } else {
        dispatch({ type: 'INCREMENT_SCORE', payload: currentCase.score })

        updateHintOnCol(currentCase.column)
        updateHintOnRow(currentCase.row)
      }
    }
  }

  return (
    <Containter>
      {cellState === 'hidden' ? (
        <HiddenCell onClick={onClick}></HiddenCell>
      ) : cellState === 'hint' ? (
        <HintCell onClick={onClick}></HintCell>
      ) : (
        <DiscoveredCell>
          {currentCase.isBomb ? (
            <StyledImage src={bombIcon} alt="BombIcon" />
          ) : (
            <CenteredText>{currentCase.score}</CenteredText>
          )}
        </DiscoveredCell>
      )}
    </Containter>
  )
}

export default Cell

//CONTAINERS

const Containter = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 50px;
  height: 50px;
`
const HiddenCell = styled('div')`
  display: flex;
  background-color: green;
  width: 50px;
  height: 50px;
`

const HintCell = styled('div')`
  display: flex;
  background-color: orange;
  width: 50px;
  height: 50px;
`

const DiscoveredCell = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: greenyellow;
  width: 50px;
  height: 50px;
`

// TEXTS

const CenteredText = styled('p')`
  display: flex;
  margin: 0px;
`

const StyledImage = styled('img')`
  width: 40px;
  height: 40px;
`

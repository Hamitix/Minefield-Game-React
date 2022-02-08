import * as React from 'react'
import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../app/hooks'

const HintButton = () => {
  const dispatch = useAppDispatch()

  const board = useAppSelector((state) => state.minefield.board)
  const currentGameStatus = useAppSelector((state) => state.minefield.gameStatus)

  const onClick = () => {
    if (currentGameStatus === 'ongoing') {
      let indexesHint: number[] = []
      let maxExpectedValue = -1
      let minRiskBomb = 100

      board.map((row, indexRow) => {
        row.map((cell, indexCol) => {
          if (cell.cellStatus !== 'discovered') {
            if (cell.hintStats.expectedValue > maxExpectedValue) {
              maxExpectedValue = cell.hintStats.expectedValue
              indexesHint = [indexRow, indexCol]
            } else if (cell.hintStats.expectedValue === maxExpectedValue) {
              if (cell.hintStats.riskBomb < minRiskBomb) {
                maxExpectedValue = cell.hintStats.expectedValue
                indexesHint = [indexRow, indexCol]
              }
            }
            if (cell.cellStatus === 'hint') {
              dispatch({
                type: 'SET_CELL_STATUS',
                payload: { cellStatus: 'hidden', row: indexRow, column: indexCol },
              })
            }
          }
        })
      })

      dispatch({
        type: 'SET_CELL_STATUS',
        payload: { cellStatus: 'hint', row: indexesHint[0], column: indexesHint[1] },
      })
    }
  }
  return <Button onClick={onClick}>Display Hint</Button>
}

export default HintButton

const Button = styled('button')`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  width: 200px;
  background-color: orange;
  border: none;
  outline: none;
`

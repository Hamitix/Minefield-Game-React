import React from 'react'
import styled from 'styled-components'

import { useAppDispatch } from '../app/hooks'

import bombIcon from '../Bomb_icon.png'
interface Props {
  row: number
  column: number
  score: number
  nbrBombs: number
  isRow: boolean
}

const CellSolver = ({ row, column, score, nbrBombs, isRow }: Props) => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch({
      type: 'SET_SOLVER_CASE',
      payload: { row: row, column: column, nbrScore: score, nbrBombs: nbrBombs, isRow: isRow },
    })
  }, [column, dispatch, nbrBombs, row, score, isRow])

  const renderCell = () => {
    return (
      <StyledCell>
        <Text>{score}</Text>
        <Text> / </Text>
        <Text>{nbrBombs}</Text>
        <StyledImage src={bombIcon} alt="BombIcon" />
      </StyledCell>
    )
  }

  return (
    <Containter>
      <HorizontalContainer>{renderCell()}</HorizontalContainer>
    </Containter>
  )
}

export default CellSolver

const Containter = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50px;
  height: 50px;
`

const HorizontalContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const StyledCell = styled('div')`
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #ffaaee;
`

const StyledImage = styled('img')`
  width: 20px;
  height: 20px;
  margin: 0px 5px;
`

const Text = styled('span')`
  color: white;
`

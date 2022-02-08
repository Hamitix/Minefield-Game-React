import React from 'react'
import styled from 'styled-components'

import { useAppSelector } from '../app/hooks'

const Message = () => {
  const gameStatus = useAppSelector((state) => state.minefield.gameStatus)
  const scoreNeeded: number = 45

  return (
    <StyledText gameStatus={gameStatus}>
      {gameStatus === 'ongoing'
        ? `You need ${scoreNeeded}`
        : gameStatus === 'won'
        ? 'Congralutions ! You won the game'
        : 'You lost !'}
    </StyledText>
  )
}

export default Message

const StyledText = styled('p')<{ gameStatus: GameStatusType }>`
  margin: 0px;
  color: ${(props) => (props.gameStatus === 'lost' ? 'red' : props.gameStatus === 'won' ? 'green' : 'white')};
`

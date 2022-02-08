import * as React from 'react'
import styled from 'styled-components'

import { useAppSelector, useAppDispatch } from '../app/hooks'

const Score = () => {
  const dispatch = useAppDispatch()
  const score = useAppSelector((state) => state.minefield.score)

  React.useEffect(() => {
    if (score >= 45) {
      dispatch({ type: 'SET_GAME_STATUS', payload: 'won' })
    }
  }, [score, dispatch])

  return <Text>{`Score : ${score}`}</Text>
}

export default Score

const Text = styled('p')`
  color: white;
`

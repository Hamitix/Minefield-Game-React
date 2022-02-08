import * as React from 'react'

import styled from 'styled-components'

import { useAppDispatch } from '../app/hooks'

const NewGameButton = () => {
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch({ type: 'RESET' })
    window.location.reload()
  }

  return <Button onClick={onClick}>New Game</Button>
}

export default NewGameButton

const Button = styled('button')`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  width: 200px;
  background-color: red;
  border: none;
  outline: none;
  margin: 10px;
`

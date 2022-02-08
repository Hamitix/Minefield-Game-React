import { createAction, createReducer } from '@reduxjs/toolkit'

import { initialBoard } from '../utils'

interface InitialState {
  score: number
  gameStatus: GameStatusType
  board: Case[][]
  solverCases: HelpCase[]
}

export const incrementScore = createAction<number>('INCREMENT_SCORE')
export const setGameStatus = createAction<GameStatusType>('SET_GAME_STATUS')
export const setCellStatus = createAction('SET_CELL_STATUS', (cellStatus: CellType, row: number, column: number) => {
  return {
    payload: {
      cellStatus: cellStatus,
      row: row,
      column: column,
    },
  }
})

export const setHintStats = createAction('SET_HINT_STATS', (row: number, col: number, hint: HintType) => {
  return {
    payload: {
      row: row,
      col: col,
      hint: hint,
    },
  }
})
export const setSolverCase = createAction<HelpCase>('SET_SOLVER_CASE')
export const reset = createAction<number>('RESET')

const initialState: InitialState = {
  score: 0,
  gameStatus: 'ongoing',
  board: initialBoard,
  solverCases: [],
}

const minefieldReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(incrementScore, (state, action) => {
      return { ...state, score: state.score + action.payload }
    })
    .addCase(setGameStatus, (state, action) => {
      return { ...state, gameStatus: action.payload }
    })
    .addCase(setCellStatus, (state, action) => {
      return {
        ...state,
        board: state.board.map((innerArray, index) => {
          if (index === action.payload.row)
            return innerArray.map((item, index) => {
              if (index === action.payload.column) return { ...item, cellStatus: action.payload.cellStatus }
              return item
            })
          return innerArray
        }),
      }
    })
    .addCase(setHintStats, (state, action) => {
      return {
        ...state,
        board: state.board.map((innerArray, index) => {
          if (index === action.payload.row)
            return innerArray.map((item, index) => {
              if (index === action.payload.col) return { ...item, hintStats: action.payload.hint }
              return item
            })
          return innerArray
        }),
      }
    })
    .addCase(setSolverCase, (state, action) => {
      return { ...state, solverCases: [...state.solverCases, action.payload] }
    })
    .addCase(reset, () => {
      return initialState
    })
)

export default minefieldReducer

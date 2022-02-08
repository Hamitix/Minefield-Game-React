export const getRandomInt = () => Math.floor(Math.random() * 3) + 1
export const getIsABomb = () => Math.random() < 0.2

export const getScore = (board: Case[][], row: number, column: number, isRowSolver: boolean) => {
  if (isRowSolver) {
    return board[row].reduce((acc, curr) => (curr.isBomb ? acc : acc + curr.score), 0)
  } else {
    let counter = 0
    for (var i = 0; i < board.length; i++) {
      if (!board[i][column].isBomb) {
        counter += board[i][column].score
      }
    }
    return counter
  }
}

export const getBombs = (board: Case[][], row: number, column: number, isRowSolver: boolean) => {
  if (isRowSolver) {
    return board[row].reduce((acc, curr) => (curr.isBomb ? acc + 1 : acc), 0)
  } else {
    let counter = 0
    for (var i = 0; i < board.length; i++) {
      counter += board[i][column].isBomb ? 1 : 0
    }
    return counter
  }
}

export const initialBoard: Case[][] = [
  [
    {
      row: 0,
      column: 0,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 0,
      column: 1,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 0,
      column: 2,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 0,
      column: 3,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 0,
      column: 4,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 0,
      column: 5,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
  ],
  [
    {
      row: 1,
      column: 0,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 1,
      column: 1,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 1,
      column: 2,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 1,
      column: 3,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 1,
      column: 4,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 1,
      column: 5,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
  ],
  [
    {
      row: 2,
      column: 0,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 2,
      column: 1,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 2,
      column: 2,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 2,
      column: 3,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 2,
      column: 4,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 2,
      column: 5,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
  ],
  [
    {
      row: 3,
      column: 0,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 3,
      column: 1,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 3,
      column: 2,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 3,
      column: 3,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 3,
      column: 4,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 3,
      column: 5,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
  ],
  [
    {
      row: 4,
      column: 0,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 4,
      column: 1,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 4,
      column: 2,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 4,
      column: 3,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 4,
      column: 4,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 4,
      column: 5,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
  ],
  [
    {
      row: 5,
      column: 0,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 5,
      column: 1,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 5,
      column: 2,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 5,
      column: 3,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 5,
      column: 4,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
    {
      row: 5,
      column: 5,
      score: getRandomInt(),
      isBomb: getIsABomb(),
      cellStatus: 'hidden',
      hintStats: { riskBomb: 0, potentialScore: 0, expectedValue: 0 },
    },
  ],
]

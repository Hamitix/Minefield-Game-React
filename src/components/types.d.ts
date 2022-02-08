declare type CellType = 'hidden' | 'discovered' | 'hint'
declare type GameStatusType = 'ongoing' | 'lost' | 'won'

declare interface Case {
  row: number
  column: number
  score: number
  isBomb: boolean
  cellStatus: CellType
  hintStats: HintType
}

declare interface HelpCase {
  row: number
  column: number
  nbrScore: number
  nbrBombs: number
  isRow: boolean
}

declare interface HintType {
  riskBomb: number
  potentialScore: number
  expectedValue: number
}

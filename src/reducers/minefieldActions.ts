import { action } from 'typesafe-actions'

export const addScore = (nbrToAdd: number) => action('MINEFIELD_ADD_SCORE', nbrToAdd)
export const addCase = (cases: Case[]) => action('MINEFIELD_ADD_CASE', cases)

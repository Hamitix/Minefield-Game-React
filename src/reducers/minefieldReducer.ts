import {createAction, createReducer} from "@reduxjs/toolkit";

export const SOME_ACTION_TYPE = "SOME_ACTION_TYPE"

export const someAction = createAction<string, typeof SOME_ACTION_TYPE>(SOME_ACTION_TYPE)

const initialState = {
    someField: "some value"
}

const minefieldReducer = createReducer(initialState, builder =>
    builder
        .addCase(someAction, (state, action) => {
            return {...state, someField: action.payload}
        })
)


export default minefieldReducer



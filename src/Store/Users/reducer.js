import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";
const {captureUser} = actions

const initialState = {

   user:[],
}

const reducer = createReducer(initialState, (builder) =>
    builder.addCase(captureUser, (state, action) =>{
        let newState = {
            ...state,
           user:action.payload.user
        };
        return newState
        })
    )

export default reducer
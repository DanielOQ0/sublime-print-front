import { createReducer } from "@reduxjs/toolkit"
import actions from './actions'

const { captureUser, updateUser } = actions
const initialstate = {
    user:[]
}

const reducer = createReducer(initialstate,
    (builder)=>builder
    .addCase(
        captureUser.fulfilled,
        (state,action)=>{
            let newState={
                ...state,
                user:action.payload.user
            }
            return newState
        }
    )
    .addCase(
        updateUser.fulfilled,
        (state, actions)=>{
            let newState ={
                ...state,
                user: actions.payload.user
            }
            return newState
        }
    )
)
export default reducer  
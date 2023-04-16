import { createReducer } from "@reduxjs/toolkit"
import actions from './action'

const { getProducts } = actions

const initialstate = {
    product:[]
}

const reducer = createReducer(initialstate,
    (builder)=>builder
    .addCase(
        getProducts.fulfilled,
        (state,action)=>{
            let newState={
                ...state,
                product:action.payload.product
            }
            return newState
        }
    )
    
)
export default reducer  
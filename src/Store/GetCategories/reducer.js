import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const { getCategories } = actions

const initialstate = {
    categories: []
}

const reducer = createReducer(
    initialstate,
    (builder) => builder
    .addCase(
        getCategories.fulfilled,
        (state,action) => {
            let newState = {
                ...state,
                categories: action.payload.categories
            }
            return newState
        }
    )
)

export default reducer
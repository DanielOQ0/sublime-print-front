import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from './Details/reducer'
import captureUser from './Users/reducer'


export const store = configureStore({
  reducer: {
    details:detailsReducer,
    users: captureUser,
  },
});

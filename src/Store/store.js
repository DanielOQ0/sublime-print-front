import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from './Details/reducer'

export const store = configureStore({
  reducer: {
    details:detailsReducer,
  },
});

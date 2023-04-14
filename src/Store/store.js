import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from './Details/reducer'
import cartReducer from './CaptureCart/reducer'
import priceReducer from './ChangePrice/reducer'

export const store = configureStore({
  reducer: {
    details:detailsReducer,
    cart: cartReducer,
    price: priceReducer
  },
});

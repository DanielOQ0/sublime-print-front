import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from './Details/reducer'
import cartReducer from './CaptureCart/reducer'
import priceReducer from './ChangePrice/reducer'
import captureUser from './Users/reducer'
import userReducer from './CaptureUser/reducer'
import checkoutMP from "./CheckoutMP/reducer"


export const store = configureStore({
  reducer: {
    details:detailsReducer,
    cart: cartReducer,
    price: priceReducer,
    users: captureUser,
    mercadopago: checkoutMP,
    user: userReducer,
  },
});

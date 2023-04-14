import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from './Details/reducer'
<<<<<<< HEAD
import captureUser from './Users/reducer'
=======
import cartReducer from './CaptureCart/reducer'
import priceReducer from './ChangePrice/reducer'
import captureUser from './Users/reducer'
import userReducer from './CaptureUser/reducer'
>>>>>>> b3c5278fa8cfdb27e2318eeff19793b2c00571c9


export const store = configureStore({
  reducer: {
    details:detailsReducer,
<<<<<<< HEAD
    users: captureUser,
=======
    cart: cartReducer,
    price: priceReducer,
    users: captureUser,
    user: userReducer,
>>>>>>> b3c5278fa8cfdb27e2318eeff19793b2c00571c9
  },
});

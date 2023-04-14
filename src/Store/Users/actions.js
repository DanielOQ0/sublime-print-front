import { createAction  } from "@reduxjs/toolkit";

let captureUser = createAction(
    "captureUser",
    ({details, product}) => {
        return { payload: {
            details: details,
            product: product
        }}
    }
)

const actions = {captureUser};
export default actions
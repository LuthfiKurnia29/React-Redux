import { createSlice } from "@reduxjs/toolkit";
import { baseURL } from "../../api/baseApi";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: JSON.parse(localStorage.getItem("cart")) || [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.data.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.qty++;
            } else {
                state.data.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.data = state.data.filter((item) => item.id !== action.payload);
        },
    },
});

export const {addToCart} = cartSlice.actions.addToCart;
export const {removeFromCart} = cartSlice.actions.removeFromCart;
export default cartSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], //so array is empty
        numOfItems: 0, 
    },

    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const existingItem = state.items.find(item => item.name === name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ mame, image, cost, quantity: 1});
            }
            state.numOfItems += 1;
        },
        removeItem: (state, action) => {
            const { name, quantity } = action.payload;
            state.items = state.items.filter(item => item.name !== name);
            state.numOfItems -= quantity;
            
            if (state.numOfItems < 0) {
                state.numOfItems = 0;
            }
        },

        updateQauntity: (state, action) => {
            const { name, qauntity } = action.payload;
            const existingItem = state.items.find(item => item.name === name);

            if (existingItem) {
                const differenceQuantity = quantity - existingItem.quantity;
                state.numOfItems += differenceQuantity;
                existingItem.quantity = quantity;
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    list: [],
}

export const buyerCartSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        add: (state, action) => {
            state.list = [...state.list, action.payload]
        },
    },
});

export const {add} = buyerCartSlice.actions
export default buyerCartSlice.reducer;
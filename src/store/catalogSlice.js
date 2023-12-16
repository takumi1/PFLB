import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    catalog: null
}

export const catalogSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        add: (state, action) => {
            state.catalog = action.payload.categories
        },
    },
});

export const {add} = catalogSlice.actions
export default catalogSlice.reducer;
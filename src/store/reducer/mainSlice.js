import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        add: (state, action) => {
            state = { ...state, ...action.payload };
            return state;
        }
    }
});

export const { add } = mainSlice.actions;
export default mainSlice.reducer;
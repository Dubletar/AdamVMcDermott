import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const NameSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        addName: (state, action) => {
            state = [...state, {...action.payload}];
            return state;
        }
    }
});

export const { addName } = NameSlice.actions;
export default NameSlice.reducer;
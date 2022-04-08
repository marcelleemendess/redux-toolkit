import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { value: { name:"", age: 0, email:""}}

export const userSlice = createSlice({
    name: "user",  // the same name as on the state
    initialState: initialStateValue,
    reducers: { 
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = initialStateValue
        }
    }
});

export const { login, logout } = userSlice.actions;

// import just the reducer to have access in the index.js
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || null,
    users: JSON.parse(localStorage.getItem("users")) || []
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setLoggedInUser: (state, action) => {
            state.loggedInUser = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    }
})

export const {
    setLoggedInUser,
    setUsers
} = authSlice.actions;

export default authSlice.reducer;
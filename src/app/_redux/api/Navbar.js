import { baseUrl } from "@/app/page";
import axios from "axios";

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const navbarThunk = createAsyncThunk('thunk/navbar', async () => {
    try {
        const url = baseUrl('navbars');
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data.data

    } catch (error) {
        console.log(error)
    }
});

const navbarSlice = createSlice({
    name: "navbarThunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(navbarThunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(navbarThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            }),
            builder.addCase(navbarThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default navbarSlice.reducer
import { mainUrl } from "@/app/page";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const homeSection7Thunk = createAsyncThunk('page/homeSection7', async () => {
    try {
        const url = mainUrl("home-page-section7s?populate=*")
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

const homeSection7Slice = createSlice({
    name: "homeSection7Thunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(homeSection7Thunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(homeSection7Thunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            }),
            builder.addCase(homeSection7Thunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default homeSection7Slice.reducer
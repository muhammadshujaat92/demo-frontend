import { mainUrl } from "@/app/page";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const homeSection9Thunk = createAsyncThunk('page/homeSection9', async () => {
    try {
        const url = mainUrl()
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

const homeSection9Slice = createSlice({
    name: "homeSection9Thunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(homeSection9Thunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(homeSection9Thunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            }),
            builder.addCase(homeSection9Thunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default homeSection9Slice.reducer
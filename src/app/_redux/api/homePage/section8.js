import { mainUrl } from "@/app/page";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const homeSection8Thunk = createAsyncThunk('page/homeSection8', async () => {
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

const homeSection8Slice = createSlice({
    name: "homeSection8Thunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(homeSection8Thunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(homeSection8Thunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            }),
            builder.addCase(homeSection8Thunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default homeSection8Slice.reducer
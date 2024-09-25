import { mainUrl } from "@/app/page";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const homeSection5Thunk = createAsyncThunk('page/homeSection5', async () => {
    try {
        const url = mainUrl("home-page5s?populate=*")
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

const homeSection5Slice = createSlice({
    name: "homeSection5Thunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(homeSection5Thunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(homeSection5Thunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            }),
            builder.addCase(homeSection5Thunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default homeSection5Slice.reducer
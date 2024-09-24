import { mainUrl } from "@/app/page";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const homeSection1Thunk = createAsyncThunk('page/homeSection1', async () => {
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

const homeSection1Slice = createSlice({
    name: "homeSection1Thunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(homeSection1Thunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(homeSection1Thunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            }),
            builder.addCase(homeSection1Thunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default homeSection1Slice.reducer
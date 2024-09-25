import { mainUrl } from "@/app/page";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const homeSection2Thunk = createAsyncThunk('page/homeSection2', async () => {
    try {
        const url = mainUrl("home-page-section2s?populate=*")
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

const homeSection2Slice = createSlice({
    name: "homeSection2Thunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(homeSection2Thunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(homeSection2Thunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            }),
            builder.addCase(homeSection2Thunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default homeSection2Slice.reducer
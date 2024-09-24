import { mainUrl } from "@/app/page";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const homeSection3Thunk = createAsyncThunk('page/homeSection3', async () => {
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

const homeSection3Slice = createSlice({
    name: "homeSection3Thunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(homeSection3Thunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(homeSection3Thunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            }),
            builder.addCase(homeSection3Thunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default homeSection3Slice.reducer
import { baseUrl } from "@/app/page";
import axios from "axios";

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const tourPackageThunk = createAsyncThunk('page/tourPackage', async () => {
    try {
        const url = baseUrl('tour-packages');
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

const tourPackageSlice = createSlice({
    name: "tourPackageThunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(tourPackageThunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(tourPackageThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            }),
            builder.addCase(tourPackageThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default tourPackageSlice.reducer
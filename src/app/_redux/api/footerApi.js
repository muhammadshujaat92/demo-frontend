import { apiUrl } from "../../../utils/apiHelper";
import axios from "axios";

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const footerThunk = createAsyncThunk('thunk/footer', async () => {
    try {
        const url = `${apiUrl}/footers/?populate=*`;
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

const footerSlice = createSlice({
    name: "footerThunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(footerThunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(footerThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            }),
            builder.addCase(footerThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default footerSlice.reducer
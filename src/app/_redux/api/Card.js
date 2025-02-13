import { apiUrl } from "../../../utils/apiHelper";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const cardThunk = createAsyncThunk('thunk/card', async () => {
    try {
        const url = `${apiUrl}/cards/?populate=*`
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data

    } catch (error) {
        console.log(error)
    }
});

const cardSlice = createSlice({
    name: "cardThunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(cardThunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(cardThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            }),
            builder.addCase(cardThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default cardSlice.reducer
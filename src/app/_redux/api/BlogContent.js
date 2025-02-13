import { apiUrl } from "../../../utils/apiHelper";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    data: [],
    status: 'idle',
    error: null
}
export const blogContentThunk = createAsyncThunk('page/blogContent', async () => {
    try {
        const url = `${apiUrl}/blog-contents/?populate=*`;
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

const blogContentSlice = createSlice({
    name: "blogContentThunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(blogContentThunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(blogContentThunk.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'success'
            }),
            builder.addCase(blogContentThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default blogContentSlice.reducer
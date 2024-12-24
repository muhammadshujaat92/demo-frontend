import { apiUrl } from "@/utils/apiHelper";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    data: [],
    status: 'idle',
    error: null
}
export const blogCardThunk = createAsyncThunk('page/blogCard', async ({ pageSize, page }) => {
    try {
        const url = pageSize || page ? `${apiUrl}/blog-contents/?populate=*&pagination[pageSize]=${pageSize}&pagination[page]=${page}` : `${apiUrl}/blog-contents/?populate=*`;
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

const blogCardSlice = createSlice({
    name: "blogCardThunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(blogCardThunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(blogCardThunk.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'success'
            }),
            builder.addCase(blogCardThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default blogCardSlice.reducer
import { mainUrl } from "@/app/page";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const blogPageThunk = createAsyncThunk('page/blogPage', async () => {
    try {
        const url = mainUrl('blog-pages?populate=*')
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

const blogPageSlice = createSlice({
    name: "blogPageThunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(blogPageThunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(blogPageThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            }),
            builder.addCase(blogPageThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default blogPageSlice.reducer
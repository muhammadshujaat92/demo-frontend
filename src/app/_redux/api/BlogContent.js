import { mainUrl } from "@/app/page";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
// export const blogContentThunk = createAsyncThunk('page/blogContent', async (id) => {
//     try {
//         const url = mainUrl(`blog-contents/${id}?populate=blogData.bannerImage&populate=admin`)
//         const response = await axios.get(url, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         return response.data.data

//     } catch (error) {
//         console.log(error)
//     }
// });

const blogContentSlice = createSlice({
    name: "blogContentThunk",
    initialState,
    reducers: {
        blogContent: (state, action) => {
            state.items = action.payload
        }
    }
    // extraReducers: (builder) => {
    //     builder.addCase(blogContentThunk.pending, (state) => {
    //         state.status = 'loading'
    //     }),
    //         builder.addCase(blogContentThunk.fulfilled, (state, action) => {
    //             state.items = action.payload;
    //             state.status = 'success'
    //         }),
    //         builder.addCase(blogContentThunk.rejected, (state, action) => {
    //             state.status = 'rejected'
    //             state.error = action.error.message
    //         })
    // }
});

export const {blogContent} = blogContentSlice.actions
export default blogContentSlice.reducer
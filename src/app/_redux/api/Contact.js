import { mainUrl } from "@/app/page";
import axios from "axios";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const contactPageThunk = createAsyncThunk('page/contactPage', async () => {
    try {
        const url = mainUrl('contact-uses/?populate=*,getInTouch,Banner,contactPageBox,contactPageTestimonial.contactTestmonialContent,contactPageTestimonial.userImages');
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

const contactPageSlice = createSlice({
    name: "contactPageThunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(contactPageThunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(contactPageThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            }),
            builder.addCase(contactPageThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default contactPageSlice.reducer
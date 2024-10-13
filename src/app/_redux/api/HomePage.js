import { mainUrl } from "@/app/page";
import axios from "axios";

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const homePageThunk = createAsyncThunk('page/homePage', async () => {
    try {
        const url = mainUrl('home-pages?populate=slides&populate=section1.BackgroundImage&populate=section2.image&populate=section3.image&populate=section4.sideBox&populate=section5.content&populate=section5.content.image&populate=testimonialBox.userImages&populate=testimonialBox.contactTestmonialContent&populate=faqSection.BackImage&populate=faqSection.FrontImage&populate=faqSection.AccordianData&populate=lastSectionData.contactDetail')
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

const homePageSlice = createSlice({
    name: "homePageThunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(homePageThunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(homePageThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            }),
            builder.addCase(homePageThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default homePageSlice.reducer
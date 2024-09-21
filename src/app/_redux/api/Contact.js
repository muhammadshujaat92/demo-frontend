import { baseUrl } from "@/app/page";

const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const initialState = {
    items: [],
    status: 'idle',
    error: null
}
export const contactPageThunk = createAsyncThunk('page/contactPage', async () => {
    try {
        const url = baseUrl('contact-uses');
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data.data

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
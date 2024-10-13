import { mainUrl } from "@/app/page";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
import axios from "axios";

const initialState = {
    items: [],
    status: 'idle',
    error: null
}

export const editThunk = createAsyncThunk("page/editPage", async (editData) => {
    const formData = new FormData();
    formData.append("identifier", editData.identifier);
    formData.append("password", editData.password)
    const url = mainUrl("auth/local")
    try {
        const response = await axios.post(url, formData);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log(error);
    }
});

const editSlice = createSlice({
    name: "editThunk",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(editThunk.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(editThunk.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success'
            }),
            builder.addCase(editThunk.rejected, (state, action) => {
                state.status = 'rejected'
                state.error = action.error.message
            })
    }
});

export default editSlice.reducer
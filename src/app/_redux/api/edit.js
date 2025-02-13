const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
import { apiUrl } from "../../../utils/apiHelper";
import axios from "axios";

const initialToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

const initialState = {
    items: [],
    token: initialToken,
    status: 'idle',
    error: null
}

export const editThunk = createAsyncThunk("page/editPage", async (editData) => {
    const formData = new FormData();
    formData.append("identifier", editData.identifier);
    formData.append("password", editData.password)
    const url = `${apiUrl}/auth/local`
    try {
        const response = await axios.post(url, formData);
        return response.data
    } catch (error) {
        console.log(error);
    }
});

const editSlice = createSlice({
    name: "editThunk",
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = JSON.stringify(action.payload);
            localStorage.setItem('token', state.token)
        },
        logout: (state) => {
            state.token = null;
            localStorage.removeItem('token')
        }
    },
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

export const { login, logout } = editSlice.actions
export default editSlice.reducer
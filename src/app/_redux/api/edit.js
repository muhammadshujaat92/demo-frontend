const { createAsyncThunk, createSlice, current } = require("@reduxjs/toolkit");
import { apiUrl } from "@/utils/apiHelper";
import axios from "axios";

const initialState = {
    items: [],
    token: null,
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
        console.log(response.data);
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
            state = JSON.stringify(current(action.payload));
            localStorage.setItem('token', state)
            console.log(state);
        },
        logout: (state, action) => {
            state = action.payload;
            localStorage.removeItem('token', state)
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
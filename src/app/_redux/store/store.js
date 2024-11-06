const { configureStore } = require("@reduxjs/toolkit");
import { combineReducers } from "@reduxjs/toolkit";
import cardSlice from "../api/Card";
import blogCardSlice from "../api/BlogCard";
import editSlice from "../api/edit";
import blogContentSlice from "../api/BlogContent";

const rootReducer = combineReducers({
    cardThunk: cardSlice,
    blogCardThunk: blogCardSlice,
    editThunk: editSlice,
    blogContentThunk: blogContentSlice
});

export const store = configureStore({
    reducer: rootReducer
});
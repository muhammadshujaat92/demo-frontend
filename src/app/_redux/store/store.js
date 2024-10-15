const { configureStore } = require("@reduxjs/toolkit");
import { combineReducers } from "@reduxjs/toolkit";
import cardSlice from "../api/Card";
import blogCardSlice from "../api/BlogCard";
import editSlice from "../api/edit";

const rootReducer = combineReducers({
    cardThunk: cardSlice,
    blogCardThunk: blogCardSlice,
    editThunk: editSlice
});

export const store = configureStore({
    reducer: rootReducer
});
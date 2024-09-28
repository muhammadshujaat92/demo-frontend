const { configureStore } = require("@reduxjs/toolkit");
import { combineReducers } from "@reduxjs/toolkit";
import cardSlice from "../api/Card";
import contactPageSlice from "../api/Contact";
import homePageSlice from "../api/HomePage";
import navbarSlice from "../api/Navbar";
import tourPackageSlice from "../api/TourPackage";
import blogPageSlice from "../api/BlogPage"
import blogCardSlice from "../api/BlogCard";
import blogContentSlice from "../api/BlogContent";

const rootReducer = combineReducers({
    navbarThunk: navbarSlice,
    cardThunk: cardSlice,
    tourPackageThunk: tourPackageSlice,
    contactPageThunk: contactPageSlice,
    homePageThunk: homePageSlice,
    blogPageThunk: blogPageSlice,
    blogCardThunk: blogCardSlice,
    blogContentThunk: blogContentSlice
});

export const store = configureStore({
    reducer: rootReducer
});
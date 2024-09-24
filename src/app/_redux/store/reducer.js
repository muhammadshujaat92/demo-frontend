import { combineReducers } from "@reduxjs/toolkit";
import cardSlice from "../api/Card";
import contactPageSlice from "../api/Contact";
import homePageSlice from "../api/HomePage";
import homeSection1Slice from "../api/homePage/section1";
import homeSection2Slice from "../api/homePage/section2";
import homeSection3Slice from "../api/homePage/section3";
import homeSection5Slice from "../api/homePage/section5";
import homeSection6Slice from "../api/homePage/section6";
import homeSection7Slice from "../api/homePage/section7";
import homeSection8Slice from "../api/homePage/section8";
import homeSection9Slice from "../api/homePage/section9";
import navbarSlice from "../api/Navbar";
import tourPackageSlice from "../api/TourPackage";

const rootReducer = combineReducers({
    navbarThunk: navbarSlice,
    cardThunk: cardSlice,
    tourPackageThunk: tourPackageSlice,
    contactPageThunk: contactPageSlice,
    homePageThunk: homePageSlice,
    homeSection1Thunk: homeSection1Slice,
    homeSection2Thunk: homeSection2Slice,
    homeSection3Thunk: homeSection3Slice,
    homeSection5Thunk: homeSection5Slice,
    homeSection6Thunk: homeSection6Slice,
    homeSection7Thunk: homeSection7Slice,
    homeSection8Thunk: homeSection8Slice,
    homeSection9Thunk: homeSection9Slice
});

export default rootReducer
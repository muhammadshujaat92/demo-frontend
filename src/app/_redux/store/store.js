import cardSlice from "../api/Card";
import contactPageSlice from "../api/Contact";
import homePageSlice from "../api/HomePage";
import navbarSlice from "../api/Navbar";
import tourPackageSlice from "../api/TourPackage";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    navbarThunk: navbarSlice,
    cardThunk: cardSlice,
    tourPackageThunk: tourPackageSlice,
    contactPageThunk: contactPageSlice,
    homePageThunk: homePageSlice
});

const store = configureStore({
    reducer: rootReducer
});

export default store
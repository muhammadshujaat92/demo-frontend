import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer";
import { persistReducer, persistStore } from "redux-persist";
const { configureStore } = require("@reduxjs/toolkit");

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store)
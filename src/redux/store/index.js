import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import contentReducer from "../reducers/contentReducer";

const store = configureStore({
  reducer: combineReducers({
    favourite: favouriteReducer,
    // content: contentReducer,
  }),
});

export default store;

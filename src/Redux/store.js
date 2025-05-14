import { configureStore } from "@reduxjs/toolkit";
import movies from "./slices/movieSlice.js"
import favorite from "./slices/favoriteSlice.js"

const store = configureStore({
  reducer: {
    movies,
    favorite
  }
})

export default store;
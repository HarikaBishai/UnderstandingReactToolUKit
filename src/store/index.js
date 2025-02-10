import { configureStore } from "@reduxjs/toolkit";
import { songSlice } from "./slices/songSlice";
import { movieSlice } from "./slices/movieSlice";
const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    movies: movieSlice.reducer,
  },
});

export default store;

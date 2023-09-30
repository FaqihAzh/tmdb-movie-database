import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: [],
  },
  reducers: {
    updateMovie(state, action) {
      state.movies = action.payload;
    },
  },
});

const moviesReducer = moviesSlice.reducer;
const { updateMovie } = moviesSlice.actions;

export { updateMovie };
export default moviesReducer;

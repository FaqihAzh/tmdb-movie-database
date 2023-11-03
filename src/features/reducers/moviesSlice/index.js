import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: [],
    details: "",
    loading: false,
    tv: false,
  },
  reducers: {
    updateMovie(state, action) {
      state.movies = action.payload;
      state.loading = false;
    },
    updateDetails(state, action) {
      state.details = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setTV: (state, action) => {
      state.tv = action.payload;
    },
  },
});

const moviesReducer = moviesSlice.reducer;
const { updateMovie, setLoading, setTV, updateDetails } = moviesSlice.actions;

export { updateMovie, setLoading, setTV, updateDetails };
export default moviesReducer;

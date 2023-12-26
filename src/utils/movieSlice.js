import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addtopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addupcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    removeMovies: (state) => {
      state.nowPlayingMovies = null;
      state.popularMovies = null;
      state.topRatedMovies = null;
      state.upcomingMovies = null;
      state.trailer = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addtopRatedMovies,
  addupcomingMovies,
  addTrailer,
  removeMovies,
} = movieSlice.actions;
export default movieSlice.reducer;

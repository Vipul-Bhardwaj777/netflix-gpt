import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieArray: null,
    gptMovieData: null,
  },
  reducers: {
    toggleShowGpt: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieNames: (state, action) => {
      state.gptMovieArray = action.payload;
    },
    addGptMovieData: (state, action) => {
      state.gptMovieData = action.payload;
    },
    removeGptMovies: (state) => {
      state.gptMovieArray = null;
      state.gptMovieData = null;
    },
    setShowGpt: (state) => {
      state.showGptSearch = false;
    },
  },
});

export const {
  toggleShowGpt,
  addGptMovieNames,
  addGptMovieData,
  removeGptMovies,
  setShowGpt,
} = gptSlice.actions;
export default gptSlice.reducer;

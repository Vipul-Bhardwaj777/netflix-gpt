import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "Config",
  initialState: {
    lang: "en",
  },
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLang } = configSlice.actions;
export default configSlice.reducer;

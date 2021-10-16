import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { images } from "./images";

type State = {
  images: any[];
  status: string;
};

const initialState: State = {
  images: [],
  status: "idle",
};

export const getAllImagesAsync = createAsyncThunk(
  "images/getAllImages",
  async () => {
    return images;
  }
);

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllImagesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllImagesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.images = action.payload;
      });
  },
});

export default imageSlice.reducer;

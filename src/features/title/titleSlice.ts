import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type State = {
  loading: boolean;
  title: any;
  timeline: any;
  state: string;
};

const initialState: State = {
  loading: false,
  title: "A/O",
  timeline: null,
  state: "idle",
};

export const setTitleAsync = createAsyncThunk(
  "title/setTitle",
  async (title: string) => {
    return title;
  }
);
export const setTimelineAsync = createAsyncThunk(
  "title/setTimeline",
  async (timeline: string) => {
    return timeline;
  }
);

export const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setTitleAsync.pending, (state) => {
        state.loading = true;
        state.state = "loading";
      })
      .addCase(setTitleAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.state = "idle";
        if (!payload) {
          return state.title;
        }
        state.title = payload;
      });
    builder
      .addCase(setTimelineAsync.pending, (state) => {
        state.loading = true;
        state.state = "loading";
      })
      .addCase(setTimelineAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.state = "idle";
        state.timeline = payload;
      });
  },
});

export default titleSlice.reducer;

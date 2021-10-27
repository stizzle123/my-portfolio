import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type State = {
  loading: boolean;
  title: any;
  timeline: any;
  state: string;
  count: any;
};

const initialState: State = {
  loading: false,
  title: "A/O",
  timeline: null,
  state: "idle",
  count: null,
};

export const setTitleAsync = createAsyncThunk(
  "title/setTitle",
  (title: string | any) => {
    return title;
  }
);
export const setTimelineAsync = createAsyncThunk(
  "timeline/setTimeline",
  (timeline: string | any) => {
    return timeline;
  }
);
export const setCountAsync = createAsyncThunk(
  "count/setCount",
  (count: string | any) => {
    return count;
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
    builder
      .addCase(setCountAsync.pending, (state) => {
        state.loading = true;
        state.state = "loading";
      })
      .addCase(setCountAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.state = "idle";
        state.count = payload;
      });
  },
});

export default titleSlice.reducer;

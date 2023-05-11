import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJobs, editJob, fetchJobs, removeJob } from "./JobAPI";

const initialState = {
  isLoading: false,
  isError: false,
  jobs: [],
  error: "",
};

export const createJob = createAsyncThunk("jobs/createJob", async () => {
  const jobs = await addJobs();
  return jobs;
});

export const fetchAllJobs = createAsyncThunk("jobs/fetchAllJobs", async () => {
  const jobs = await fetchJobs();
  return jobs;
});

export const updateJobs = createAsyncThunk(
  "jobs/updateJobs",
  async ({ id, data }) => {
    const jobs = await editJob(id, data);
    return jobs;
  }
);

export const deleteJob = createAsyncThunk("jobs/deletJob", async (id) => {
  const jobs = await removeJob(id);
  return jobs;
});

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAllJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.jobs = action.payload;
      })
      .addCase(fetchAllJobs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.jobs.push(action.payload);
      })
      .addCase(addJobs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        const index = state.jobs.findIndex((t) => t.id === action.payload.id);

        state.jobs[index] = action.payload;
      })
      .addCase(updateJobs.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        const remainingJobs = state.jobs.filter(
          (t) => t.id !== action.payload.id
        );

        state.jobs = remainingJobs;
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;
// export const {} =  jobSlice.actions

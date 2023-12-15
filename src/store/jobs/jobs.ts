import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { API_BASE_URL, API_HOST, API_KEY } from '../../constants/api-credentials';
import axios, { AxiosRequestConfig } from "axios";
import { Job } from "../../types/searchResults";
import { error } from "console";

interface JobsSliceState {
  jobs: Job[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | undefined
}

let options: AxiosRequestConfig  = {
  method: 'GET',
  headers: {
    process: '',
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST
  },
};

export const getJobs = createAsyncThunk('jobs/getJobs', async (params) => {
  // params: { query: `${searchParam?.searchTerm} ${searchParam?.location || ''}` }
  try {
    const res = await axios.get(`${API_BASE_URL}/search`, {...options, params});
    return res.data;
  } catch (error: any) {
    return error.message
  }
  

})

const initialState: JobsSliceState = {
  jobs: [],
  status: 'idle',
  error: undefined
}

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    // getJobs: (state, { payload }) => state.jobs = payload
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.jobs = action.payload;
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
      })
  }
});

// export const { getJobs } = jobsSlice.actions;
export const allJobs = (state: JobsSliceState) => state.jobs;
export const getJobsStatus = (state: JobsSliceState) => state.status
export const getJobsError = (state: JobsSliceState) => state.error
export default jobsSlice.reducer
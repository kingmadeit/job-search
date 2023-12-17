import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { SEARCH_API_URL, API_HOST, API_KEY } from '../constants/api-credentials';
import axios, { AxiosRequestConfig } from "axios";
import { Job, SearchParameters } from "../types/searchResults";
import { updateSearchParams } from "./searchSlice";

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

export const getJobs = createAsyncThunk('jobs/getJobs', async (params: SearchParameters) => {
  try {
    const res = await axios.get(`${SEARCH_API_URL}`, {...options, params});
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
    .addCase(updateSearchParams.type, (state, action) => {
      console.log(`Im in the job slice and the action is ::: ${action.type}`)
      state.status = 'idle';
    })
    .addCase(getJobs.pending, (state, action) => {
      state.status = 'loading';
    })
    .addCase(getJobs.fulfilled, (state, action) => {
      const { payload } = action;
      /**
       *  internal server errors are fullfiled here with payload as string
       */
      if (typeof payload === 'string' && payload.includes('failed')) {
        state.status = 'failed';
        state.error = payload;
      } else {
        state.status = 'succeeded';
        state.jobs = payload.data; // here payload has pagination info
        state.error = undefined;
      }
    })
    .addCase(getJobs.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message
    })
  }
});

export default jobsSlice.reducer
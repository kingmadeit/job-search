import React, { useEffect } from 'react';
import { useState } from 'react';
import Lottie from "lottie-react";
import { Search, JobList } from '../../components';
import { Job, SearchResults } from '../../types/searchResults';
import { useSelector, useDispatch } from 'react-redux';
import { allJobs, getJobs, getJobsError, getJobsStatus } from '../../store/jobs/jobs';
import {hiringAnimation, searchAnimation, noResults } from '../assets/index';
import { TSearchParam } from '../../types/search';


const Home = () => {
  const dispatch = useDispatch();
  const _jobs = useSelector(allJobs);
  const _jobsStatus = useSelector(getJobsStatus);
  const _jobsError = useSelector(getJobsError);

  useEffect(() => {
    if (_jobsStatus === 'idle') dispatch(getJobs())
  }, [_jobsStatus, dispatch]);

  switch (_jobsStatus) {
    case 'loading':
  }


  const getContent = () => {
    return (
      <>
        { _jobsStatus === 'succeeded' ? <JobList jobs={jobs} /> :
          <Lottie animationData={
              _jobsStatus === 'loading' ? searchAnimation  :
              _jobsStatus === 'failed' || !! _jobsError ? noResults : 
              hiringAnimation
            } 
            loop={true} 
            style={{ width: '70%', margin: '3rem auto'}}
          /> 
        }
      </>
    )
  }

  const [hasSearchResults, setHasSearchResults] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<unknown>(null);

  const handleSearch = (_params: TSearchParam) => {
    const params = {
      query: `${_params.searchTerm}, ${_params.location}`
    }
    if (_jobsStatus === 'idle') {
      try {
        dispatch(getJobs(params)) 
      } catch (error) {
        console.log(error)
      }
    } 
  }

  return (
    <div className='p-16 content-center w-screen min-h-screen flex flex-col items-center content-center'>
      <h1 className='text-6xl text-lightskyblue'>Career Hub </h1>
      <h4 className='py-1 text-zinc-300'>Looking for a new career?</h4>
      {/* <Search onSubmit={handleSearchResults}/> */}
      <Search onSubmit={handleSearch}/>
      <div>
        {getContent()}
      </div>
    </div>
  )
}

export default Home
import React, { useEffect } from 'react';
import Lottie from "lottie-react";
import { Search, JobList } from '../../components';
import { getJobs } from '../../store/jobsSlice';
import { hiringAnimation,searchAnimation, noResults } from '../../assets/index';
import { TSearchParam } from '../../types/search';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

const Home = () => {
  const dispatch = useAppDispatch();
  const apiError = useAppSelector(state => state.jobs.error);
  const apiStatus = useAppSelector(state => state.jobs.status);
  const searchParams = useAppSelector(state => state.search);
  const jobsFound = useAppSelector(state => state.jobs.jobs);

  useEffect(() => {
    if (apiStatus === 'idle') dispatch(getJobs(buildParams(searchParams)));
  }, [apiStatus, dispatch]);


  const getContent = () => {
    return (
      <>
        { apiStatus === 'succeeded' ? <JobList jobs={jobsFound} /> :
          <Lottie animationData={
              apiStatus === 'loading' ? searchAnimation  :
              apiStatus === 'failed' || !! apiError ? noResults : 
              hiringAnimation
            } 
            loop={true} 
            style={{ width: '70%', margin: '3rem auto'}}
          /> 
        }
      </>
    )
  }

  const buildParams = (params: TSearchParam) =>  {
    return { query: `${params.searchTerm}, ${params.location}` }
  }

  const handleSearch = async (_params: TSearchParam) => {
    const params = buildParams(_params);
    if (apiStatus === 'idle') {
      try {
        await dispatch(getJobs(params));
        console.table({apiError, apiStatus})
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
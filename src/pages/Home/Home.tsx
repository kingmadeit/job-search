import React from 'react';
import { useState } from 'react';
// import Lottie from "lottie-react";
import { Search, JobList } from '../../components';
import { Job, SearchResults } from '../../types/searchResults';


const Home = () => {
  const [hasSearchResults, setHasSearchResults] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [error, setError] = useState<unknown>(null);

  const handleSearchResults = (res: SearchResults) => {
    const { hasResults, data, error } = res;
    setHasSearchResults(hasResults)
    setJobs(data);
    setError(error);
  }

  return (
    <div className='p-16 content-center w-screen min-h-screen flex flex-col items-center content-center'>
      <h1 className='text-6xl text-lightskyblue'>Career Hub </h1>
      <h4 className='py-1 text-zinc-300'>Looking for a new career?</h4>
      <Search onSubmit={handleSearchResults}/>
      {hasSearchResults && <JobList jobs={jobs}/>}
      {!!error && <p>Error with search</p>}
    </div>
  )
}

export default Home
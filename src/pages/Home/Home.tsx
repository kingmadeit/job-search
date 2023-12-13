import React from 'react';
import { useState, useEffect } from 'react';
import Lottie from "lottie-react";
import { Search, JobList } from '../../components';

const Home = () => {
  const [hasSearchResults, setHasSearchResults] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setIsSearching(false), 2000)
  // }, []);

  const handleSearchResults = () => {
    alert('got here')
  }

  return (
    <div className='p-16 content-center w-screen h-screen flex flex-col items-center content-center'>
      <h1 className='text-6xl text-lightskyblue'>Career Hub </h1>
      <h4 className='py-1 text-zinc-300'>Looking for a new career?</h4>
      <Search onSubmit={handleSearchResults}/>
      {hasSearchResults && <JobList />}

    </div>
  )
}

export default Home
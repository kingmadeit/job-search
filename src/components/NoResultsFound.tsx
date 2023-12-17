import React from 'react'
import { noResults } from '../assets/index';
import Lottie from "lottie-react";

const NoResultsFound = () => {
  const term = 'test';
  return (
    <div className='flex flex-col items-center content-center p-20'>
      <h2 className='text-lg py-4'>No search results for: '{term}'</h2>
      <Lottie animationData={noResults} 
            loop={true} 
            style={{ width: '70%', margin: '3rem auto'}}
          /> 
    </div>
  )
}

export default NoResultsFound
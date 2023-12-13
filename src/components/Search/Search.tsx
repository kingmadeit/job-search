import React from 'react';
import {useState, useEffect} from 'react'
import { TSearchParam, TSCProps } from '../../types/search';
import Lottie from "lottie-react";
import {hiringAnimation, searchAnimation } from '../../assets/index';

const Search = (props: TSCProps) => {
  const [searchParam, setSearchParam] = useState<TSearchParam>()
  const [isSearching, setIsSearching] = useState<boolean>(false);
  
  const getLoader = () => {
    return (
      <>
        <Lottie 
          animationData={isSearching ? searchAnimation  : hiringAnimation} 
          loop={true} 
          style={{ width: '70%', margin: '3rem auto'}}
        /> 
      </>
    )
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target;
    setSearchParam({...searchParam, [name]: value} as TSearchParam)
  }

  const handleSearch = () => {
    alert(searchParam?.location);
    props.onSubmit();
  }

  return (
    <div className='py-2 flex flex-col items-center content-center'>
        <div className='py-1 min-w-max gap-5 flex content-center items-content justify-center h-12'>
            <input className='rounded-3xl px-5 bg-input text-sm font-medium min-w-[500px] w-[33vw]'
                onChange={handleOnChange} type="text"
                value={searchParam?.searchTerm} 
                name="searchTerm" 
                placeholder='job title, keywords or company name' />
            <input className='rounded-3xl px-5 bg-input text-sm font-medium min-w-[300px]' 
                onChange={handleOnChange} type="text" 
                value={searchParam?.location} 
                name="location"
                placeholder='city, state, or zip code' />
            <button onClick={handleSearch}>search</button>
        </div>
        <div>
            { getLoader() }
        </div>
    </div>
  )
}

export default Search
import React from 'react';
import {useState, useRef} from 'react'
import { TSearchParam, TSCProps } from '../types/search';
// import useSearch from '../../hooks/useSearch';
import axios, { AxiosRequestConfig } from "axios";
import Lottie from "lottie-react";
import {hiringAnimation, searchAnimation, noResults } from '../assets/index';
import { API_BASE_URL, API_HOST, API_KEY } from '../constants/api-credentials';
import { SearchResponse, Job } from '../types/searchResults';

enum SearchType {
  Default = 'search',
  SearchFilter = 'search-filter',
  JobDetails = 'job-details'
}


const Search = (props: TSCProps) => {
  const termInputRef = useRef<HTMLInputElement>(null);
  const locationInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [searchParam, setSearchParam] = useState<TSearchParam>();
  const [isSearching, setIsSearching] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<Job[]>([]);

  const options: AxiosRequestConfig  = {
    method: 'GET',
    headers: {
      process: '',
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST
    },
    params: { query: `${searchParam?.searchTerm} ${searchParam?.location || ''}` }
  };

const getSearchResults = async () => {
  if (!!options.params.query) {
    setIsSearching(true);
    try {
      const res = await axios.get(`${API_BASE_URL}${SearchType.Default}`, options);
      setData(res.data.data);
      setError(null);
      // setTimeout(() => {
      //   setIsSearching(false);
      //   setHasResults(true);
      // }, 1000);
      setIsSearching(false);
      setHasResults(true);
      
    } catch(error: unknown) {
      setError(error);
      setHasResults(false);
      setData([]);
      console.log(`Error searching :::: ${error}`);
    } finally {
      setIsSearching(false);
      props.onSubmit({hasResults, data, error})
    }
  }
}


  const getLoader = () => {
    return (
      <>
        { hasResults ? <></> :
          <Lottie 
            animationData={isSearching ? searchAnimation  : (hasResults && data.length === 0 || !!error) ? noResults : hiringAnimation} 
            loop={true} 
            style={{ width: '70%', margin: '3rem auto'}}
          /> 
        }
      </>
    )
  }

  const handleSearch = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const searchParam: TSearchParam = {
      searchTerm: termInputRef?.current?.value || '',
      location: locationInputRef?.current?.value || ''
    };
    setSearchParam(searchParam);

    if (!!searchParam.searchTerm) await getSearchResults();
    formRef.current?.reset();
  }

  return (
    <div className='py-2 flex flex-col items-center content-center'>
        <form ref={formRef} className='min-w-max gap-5 flex content-center items-content justify-center h-12'>
            <input className='rounded-3xl px-5 bg-input text-sm font-medium min-w-[500px] w-[33vw] placeholder:text-gray-400 shadow-lg shadow-indigo-500/50'
              ref={termInputRef}
              type="text"
              name="searchTerm" 
              required={true} pattern="[A-Za-z0-9]{1,20}"
              placeholder='job title, keywords or company name' />
            <input className='rounded-3xl px-5 bg-input text-sm font-medium min-w-[300px] placeholder:text-gray-400 shadow-lg shadow-indigo-500/50 focus-none' 
              ref={locationInputRef}
              type="text" 
              name="location"
              placeholder='city, state, or zip code' />
            <button type='submit' onClick={handleSearch}>search</button>
        </form>
        <div>
            { getLoader() }
        </div>
    </div>
  )
}

export default Search
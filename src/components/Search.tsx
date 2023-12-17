import React from 'react';
import {useState, useRef} from 'react'
import { TSearchParam, TSCProps } from '../types/search';
import { useAppDispatch } from '../hooks/hooks';
import { updateSearchParams } from '../store/searchSlice';
import { useSelector } from 'react-redux';

const Search = (props: TSCProps) => {
  const termInputRef = useRef<HTMLInputElement>(null);
  const locationInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [searchParam, setSearchParam] = useState<TSearchParam>();

  const dispatch = useAppDispatch();
  
  const handleSearch = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const searchParam: TSearchParam = {
      searchTerm: termInputRef?.current?.value || '',
      location: locationInputRef?.current?.value || ''
    };

    // I dont think search component should be in charge of this?
    // if (!!searchParam.searchTerm) {
      //   await dispatch(updateSearchParams(searchParam));
      //   props.onSubmit(searchParam);
      //   formRef.current?.reset();
      // } 
      await dispatch(updateSearchParams(searchParam));
      props.onSubmit(searchParam);
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
    </div>
  )
}

export default Search
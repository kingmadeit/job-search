import React from "react";
import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { TUseSearch } from "../types/search";

const useSearch = (searchObj: TUseSearch) => {
  alert('hee')
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState<unknown>(null);
    const [data, setData] = useState([]);

    const options: AxiosRequestConfig  = {
        method: 'GET',
        headers: {
          process: '',
          'x-rapidapi-key': import.meta.env.REACT_APP_API_KEY ?? '',
          'x-rapidapi-host': import.meta.env.REACT_APP_API_HOST ?? ''
        },
        params: searchObj.params
      };

    const getSearchResults = async () => {
        setIsSearching(true);
        try {
            const response = await axios.get(searchObj.endpoint, options);
            setData(response.data.data);
            setIsSearching(false);
        } catch(error: unknown) {
            setError(error);
            console.log(`Error searching :::: ${error}`);
        } finally {
            setIsSearching(false);
        }
     
    }

    useEffect(() => { getSearchResults() }, []);

    const retrySearch = () => {
        setIsSearching(true);
        getSearchResults()
    };

    return { isSearching, data, error, retrySearch }

}

export default useSearch;
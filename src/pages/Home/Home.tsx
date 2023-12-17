import Lottie from "lottie-react";
import { Search, JobList, NoResultsFound } from '../../components';
import { getJobs } from '../../store/jobsSlice';
import { hiringAnimation,searchAnimation } from '../../assets/index';
import { TSearchParam } from '../../types/search';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { SearchParameters } from "../../types/searchResults";
import toast from 'react-hot-toast';

const Home = () => {
  const dispatch = useAppDispatch();
  const apiError = useAppSelector(state => state.jobs.error);
  const apiStatus = useAppSelector(state => state.jobs.status);
  const searchParams = useAppSelector(state => state.search);
  const jobsFound = useAppSelector(state => state.jobs.jobs);

  const getContent = () => {
    let content;
    if (apiStatus === 'succeeded' && jobsFound?.length) {
      content = <JobList jobs={jobsFound} />;
    } else if(apiStatus === 'failed' || !!apiError) {
      content = <NoResultsFound />;
    } else {
      const isSearching = apiStatus === 'loading';
      // const isSearching = !!(searchParams.searchTerm || searchParams.location) && apiStatus === 'loading';
      content = <Lottie animationData={isSearching ? searchAnimation : hiringAnimation } 
        loop={true} 
        style={{ width: '70%', margin: '3rem auto'}}
      /> 
    }
    return content;
  }

  const buildParams = (params: TSearchParam) =>  {
    return { query: `${params?.searchTerm} ${params?.location}` }
  }

  const handleSearch = async (_params: TSearchParam) => {
    const params: SearchParameters = buildParams(_params) as SearchParameters;
    if (!!params.query.trim() && apiStatus === 'idle') {
      try {
        await dispatch(getJobs(params));
        console.table({apiError, apiStatus})
      } catch (error) {
        console.log(error)
      }
    } else if(apiStatus === 'idle' ) {
      toast.error('You must enter a search term');
      setTimeout(() => toast.success('what are you looking for?'), 1300);
      return console.error('Home.tsx/buildParams() ::: nothing provided to build');
    } 
  }

  return (
    <div className='p-16 content-center w-screen min-h-screen flex flex-col items-center content-center'>
      <h1 className='text-6xl text-lightskyblue'>Career Hub </h1>
      <h4 className='py-1 text-zinc-300'>Looking for a new career?</h4>
      <Search onSubmit={handleSearch}/>
      <div>
        {getContent()}
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import { Job } from '../types/searchResults'
import {JobCard} from './';

const JobList = (props: {jobs: Job[] | []}) => {
  const { jobs } = props;
  return (
    <div>
      <ul className='w-screen flex-wrap gap-8 items-start content-center flex justify-center py-16'>
        {jobs.map((job) => {
          return (
            <li key={job.job_id}>
              <JobCard job={job} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default JobList
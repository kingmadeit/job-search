import React from 'react'
import { Job } from '../../types/searchResults'
import JobCard from '../JobCard/JobCard';

const JobList = (props: {jobs: Job[] | []}) => {
  const { jobs } = props;
  return (
    <div>
      <ul className='flex flex-col gap-20 items-start'>
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
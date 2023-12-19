import React, { useState } from 'react'
import { Job } from '../types/searchResults'
import {JobCard, JobDetailCard} from './';

const JobList = ({jobs}: {jobs: Job[] | []}) => {

  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  
  const handleClick = (id: Job) => setSelectedJob(id);

  return (
    <div className='flex justify-center py-16 text-sm'>
      <ul className='w-[30%] flex-wrap gap-8 items-start content-center flex'>
        {jobs.map((job) => {
          return (
            <li className='cursor-pointer' key={job.job_id} onClick={()=> handleClick(job)}>
              <JobCard job={job} />
            </li>
          )
        })}
      </ul>
      { selectedJob &&
        <div className='mx-8 my-4 w-[50%]'>
          <JobDetailCard job={selectedJob}/>
        </div>
      }
    </div>
  )
}

export default JobList
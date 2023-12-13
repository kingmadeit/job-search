import React from 'react'
import { Job } from '../../types/searchResults'

const JobList = (jobs: Job[] | []) => {
  return (
    <div>
      <ul className='flex flex-col gap-20 items-start'>
        {jobs.map((job) => {
          return (
            <li>
              <a href="">
                <div>
                  <h2>{job.employer_name}</h2>
                  <h2>{job.employer_website}</h2>
                  <h2>{job.job_city}</h2>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default JobList
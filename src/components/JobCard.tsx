import React from 'react'
import { Job } from '../types/searchResults'

const JobCard = (props: {job: Job }) => {
  const { job } = props;
  return (
    <div>
      <a href="">
        <div>
          <h2>{job.employer_name}</h2>
          <h2>{job.employer_website}</h2>
          <h2>{job.job_city}</h2>
          <img src={job.employer_logo as string} alt="" />
        </div>
      </a>
    </div>
  )
}

export default JobCard
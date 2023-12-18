import React from 'react'
import { Job } from '../types/searchResults'

const JobCard = (props: {job: Job }) => {
  const { job } = props;
  return (
    // <div>
    //   <a href="">
    //     <div>
    //       <h1>{job.job_title}</h1>
    //       <h2>{job.employer_name}</h2>
    //       <h2>{job.job_state}, ${job.job_country}</h2>
    //       {/* <img src={job.employer_logo as string} alt="" /> */}
    //     </div>
    //   </a>
    // </div>

    <div className="max-w-sm rounded overflow-hidden shadow-lg before:absolute before:content[''] before:w-full before:h-full before:blur relateive bg-[#ffffff12]">
      <div className="px-6 py-4">
        <h1 className="truncate font-bold text-xl mb-2">{job.job_title}</h1>
        <h2>{job.employer_name}</h2>
        <h2>{job.job_state}, {job.job_country}</h2>
        <p className="truncate text-gray-400 text-base max-h-[150px]">
          {job.job_description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  )
}

export default JobCard
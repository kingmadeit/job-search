import React from 'react'
import { Job } from '../types/searchResults'
import { IoBusinessOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa6";
import CompanyCard from './CompanyCard';
import { ICompanyCard } from '../types/company';

const JobCard = (props: {job: Job }) => {
  const { job } = props;
  return (
// before:absolute before:content[''] before:w-full before:h-full before:blur relateive bg-[#ffffff12]
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <CompanyCard company={
          {
            name: job.employer_name,
            job_title: job.job_title,
            city: job.job_city,
            state: job.job_state,
            country: job.job_country
          } as ICompanyCard
        } size='md'/>
        <div className="lowercase text-sm pt-4 pb-2">
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-lightslategrey mr-2 mb-2">{job.job_employment_type}</span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-lightslategrey mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-lightslategrey mr-2 mb-2">#winter</span>
        </div>
        {/* <p className="truncate text-sm text-gray-400 max-h-[150px]">
          {job.job_description}
        </p> */}
        <span className='text-xxs flex gap-1 text-gray-400 items-center leading-[unset]'><FaRegClock />Posted 30 days ago</span>
      </div>
    </div>
  )
}

export default JobCard
import React from 'react'
import { Job } from '../types/searchResults'
import { FaRegClock } from "react-icons/fa6";
import CompanyCard from './CompanyCard';
import { ICompanyCard } from '../types/company';
import { currencyFormatter, daysAgo } from '../helpers';

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
          {
            job.job_min_salary && job.job_max_salary && <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-lightslategrey mr-2 mb-2">
              {currencyFormatter(job.job_min_salary!)}
              - 
              {currencyFormatter(job.job_max_salary!)}
            </span>
          }
          {job.job_is_remote && <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-lightslategrey mr-2 mb-2">remote</span>}
        </div>
        {/* <p className="truncate text-sm text-gray-400 max-h-[150px]">
          {job.job_description}
        </p> */}
        { !!job.job_posted_at_datetime_utc &&
          <span className='text-xxs flex gap-1 text-gray-400 items-center leading-[unset]'><FaRegClock />Posted {daysAgo(
            job.job_posted_at_datetime_utc as string,
            new Date().toISOString()
          )} days ago</span>
        }
      </div>
    </div>
  )
}

export default JobCard
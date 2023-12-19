import React from "react";
import { Job } from "../types/searchResults";
import { LuExternalLink } from "react-icons/lu";
import CompanyCard from "./CompanyCard";
import { ICompanyCard } from "../types/company";

const benefits = (benefits: string[]) => {
  return (
    <div>
      <h3 className="font-bold">Benefits</h3>
      <ul className="list-circle mx-4">
        {benefits.map((benefit, i) => {
          return (
            <li 
              key={`${benefit}-${i}`}
              className="capitalize"
            >
              {benefit.replace(/_/g, ' ')}
            </li>)}
          )
        }
      </ul>
    </div>
  )
}

const description = (desc: string) => {
  return (
    <>
      <h3 className="font-bold">Job Description</h3>
      <p className="text-gray-300 text-justify">{desc}</p>
    </>
  )
}

// TODO ::::!!!! Extract this into a component
const bulletList = (list: string[], title?: string) => {
  return (
    <>
      <h3 className="font-bold">{title}</h3>
      <ul className='list-circle ml-4'>
        {list.map(
          (item) => {
            return (
              <li key={item}>{item}</li>
            )
          }
        )}
      </ul>
    </>
  )
}

const JobDetailCard = ({ job }: { job: Job }) => {
  return (
    <div className="
      rounded-lg
      items-start 
      flex-col 
      overflow-hidden
      shadow-lg
      sticky top-0">
      <div className="
        bg-detail-banner
        bg-cover
        bg-bottom
        bg-size-cover
        w-full h-[200px] 
        relative after:content[''] 
        after:absolute 
        after:w-full 
        after:h-full">
      </div>
      <div className="p-4 flex flex-col gap-4">
        <CompanyCard company={
          {
            name: job.employer_name,
            city: job.job_city,
            state: job.job_state,
            country: job.job_country,
            url: job.employer_website,
            job_title: job.job_title
          } as ICompanyCard
        } />
        {!!job.job_description && description(job.job_description)}
        {!!job.job_highlights?.Responsibilities?.length && bulletList(job.job_highlights.Responsibilities, 'Responsibilities')}
        {!!job.job_highlights?.Qualifications?.length && bulletList(job.job_highlights.Qualifications, 'Qualifications')}
        {!!job.job_benefits?.length && benefits(job.job_benefits) }
      </div>
      
    </div>
  )
}

export default JobDetailCard
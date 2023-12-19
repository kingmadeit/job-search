import React from 'react'
import { ICompanyCard } from '../types/company'
import { LuExternalLink } from 'react-icons/lu'
import { IoBusinessOutline } from 'react-icons/io5'
import { GrLocation } from 'react-icons/gr'

const CompanyCard = ({company} : {company: ICompanyCard}) => {
  return (
    <div>
      <h1 className="text-lightskyblue font-bold text-lg capitalize">{company.job_title}</h1>
      { !!company.url?.trim().length &&
        <a className="flex gap-2 items-center" href={company.url} target="_blank">
          <IoBusinessOutline />
          <span>{company.name}</span>
          <LuExternalLink />
        </a>  
      }
      { !company.url?.trim().length && 
        <h3 className='text-sm flex gap-1 items-center'>
          <IoBusinessOutline />
          <span>{company.name}</span>
        </h3>
      }
      <h4 className='text-xs flex items-center'>
        <GrLocation />
        <span>
          {company.city}, {company.state}, {company.country}
        </span>
      </h4>
    </div>
  )
}

export default CompanyCard
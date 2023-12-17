
export interface SearchResponse<T> {
 data:       T[];
 parameters: SearchParameters;
 request_id: string;
 status:     string;
}

export interface SearchResults {
  hasResults: boolean,
  data: Job[],
  error: unknown
}

export interface Job {
 apply_options?:                        ApplyOption[];
 employer_company_type?:                null | string;
 employer_logo?:                        null | string;
 employer_name?:                        string;
 employer_website?:                     null | string;
 job_apply_is_direct?:                  boolean;
 job_apply_link?:                       string;
 job_apply_quality_score?:              number;
 job_benefits?:                         null;
 job_city?:                             JobCity;
 job_country?:                          JobCountry;
 job_description?:                      string;
 job_employment_type?:                  JobEmploymentType;
 job_experience_in_place_of_education?: boolean;
 job_google_link?:                      string;
 job_highlights?:                       JobHighlights;
 job_id?:                               string;
 job_is_remote?:                        boolean;
 job_job_title?:                        null;
 job_latitude?:                         number;
 job_longitude?:                        number;
 job_max_salary?:                       null;
 job_min_salary?:                       null;
 job_naics_code?:                      string;
 job_naics_name?:                      string;
 job_occupational_categories?:         string[];
 job_offer_expiration_datetime_utc?:    Date | null;
 job_offer_expiration_timestamp?:       number | null;
 job_onet_job_zone?:                    string;
 job_onet_soc?:                         string;
 job_posted_at_datetime_utc?:           Date;
 job_posted_at_timestamp?:              number;
 job_posting_language?:                 JobPostingLanguage;
 job_publisher?:                        string;
 job_required_education?:               JobRequiredEducation;
 job_required_experience?:              JobRequiredExperience;
 job_required_skills?:                  null;
 job_salary_currency?:                  null;
 job_salary_period?:                    null;
 job_state?:                            JobState;
 job_title?:                            string;
}

export interface ApplyOption {
 apply_link: string;
 is_direct:  boolean;
 publisher:  string;
}

export enum JobCity {
 Austin = "Austin",
 Dallas = "Dallas",
 Houston = "Houston",
}

export enum JobCountry {
 Us = "US",
}

export enum JobEmploymentType {
 Fulltime = "FULLTIME",
 Parttime = "PARTTIME",
}

export interface JobHighlights {
 Benefits?:         string[];
 Qualifications?:   string[];
 Responsibilities?: string[];
}

export enum JobPostingLanguage {
 En = "en",
}

export interface JobRequiredEducation {
 associates_degree:                    boolean;
 bachelors_degree:                     boolean;
 degree_mentioned:                     boolean;
 degree_preferred:                     boolean;
 high_school:                          boolean;
 postgraduate_degree:                  boolean;
 professional_certification:           boolean;
 professional_certification_mentioned: boolean;
}

export interface JobRequiredExperience {
 experience_mentioned:          boolean;
 experience_preferred:          boolean;
 no_experience_required:        boolean;
 required_experience_in_months: number | null;
}

export enum JobState {
 Tx = "TX",
}

export interface SearchParameters {
 num_pages?: number;
 page?:      number;
 query:     string;
}

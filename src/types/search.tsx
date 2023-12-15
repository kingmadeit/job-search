import { UnionConcat } from "./union";

export type TSearchParam = {
    searchTerm: string,
    location: string
};

export type TSCProps = {
    onSubmit: (param: TSearchParam)
};

type TiTles = 'FULLTIME' | 'CONTRACTOR' | 'PARTTIME' | 'INTERN';
type TJTUnion = UnionConcat<TiTles, ','>;

type Requirements = 'under_3_years_experience' | 'more_than_3_years_experience' | 'no_experience' | 'no_degree';
type TJobRequirements = UnionConcat<Requirements, ','>
export type TUseSearch = {
    endpoint: 'search' | 'search-filters' | 'job-details' | 'estimated-salary',
    params: {
        query: string,
        num_pages?: number,
        page?: number,
        date_posted?: 'all' | 'today' | '3days' | 'week' | 'month',
        remote?: boolean,
        employment_types?: TJTUnion,
        job_requirements?: TJobRequirements,
        actively_hiring?: boolean,
        radius?: number
    } | unknown | any
}







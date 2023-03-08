export type data = {
    description: string,
    employment_type: string,
    id: number,
    industry: string,
    job_functions: null,
    location: string,
    meta_description: string,
    meta_title: string,
    seniority_level: null,
    title: string
}

export interface JobDetails {
    status: number,
    data: data
}
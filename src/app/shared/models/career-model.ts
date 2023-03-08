export type career = {
    category_id : number,
    category_name : string
    description : string,
    id : number,
    location: string,
    title : string
}

export interface CareerModel {
    status: number,
    careers: [career]
}
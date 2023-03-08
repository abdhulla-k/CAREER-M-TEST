type banner = {
    description: string,
    id: string,
    image: string,
    image_alt: null
    meta_description: string,
    meta_title: string
    title: string
}
export interface Banner {
    banners: banner[],
    status: number
}
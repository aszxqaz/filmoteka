export const getGenreUrlBySlug = (slug: string) => `/genre/${slug}`
export const getMovieUrlBySlug = (slug: string) => `/movie/${slug}`
export const getActorUrlBySlug = (slug: string) => `/actor/${slug}`

export const getAdminUrl = (path: string) => `/manage/${path}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)

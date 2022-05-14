export const API_URL = `${process.env.APP_URL}/api`

export const getAuthUrl = (path: string) => `/auth${path}`
export const getUsersUrl = (path: string) => `/users${path}`
export const getMoviesUrl = (path: string) => `/movies${path}`
export const getGenresUrl = (path: string) => `/genres${path}`
export const getRatingsUrl = (path: string) => `/ratings${path}`
export const getActorsUrl = (path: string) => `/actors${path}`

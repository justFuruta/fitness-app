const baseExerciseUrl = 'https://exercisedb.p.rapidapi.com/exercises'
const baseVideoUrl = 'https://youtube-search-and-download.p.rapidapi.com/search'
const exerciseHeaders: HeadersInit = {
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}
const videoHeaders: HeadersInit = {
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
}
export const exerciseOptions: RequestInit = {
    method: 'GET',
    headers: exerciseHeaders
};

export const videoOptions: RequestInit = {
    method: 'GET',
    headers: videoHeaders
}

export interface Iexercises {
    "bodyPart": "string";
    "equipment": "string";
    "gifUrl": "string";
    "id": "string";
    "name": "string";
    "target": "string";
}


export const fetchData = async <T>(endpoint: string, options: RequestInit | undefined) => {
    const response = await fetch(baseExerciseUrl + endpoint, options)
    const data: T = await response.json()

    return data
}


export const fetchVideo = async (endpoint: string, options: RequestInit | undefined) => {
    const response = await fetch(baseVideoUrl + endpoint, options)
    const data = await response.json()
    return data
}

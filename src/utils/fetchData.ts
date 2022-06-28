const baseUrl = 'https://exercisedb.p.rapidapi.com/exercises/'
const headers: HeadersInit = {
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPID_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}
export const exerciseOptions: RequestInit = {
    method: 'GET',
    headers
};

export interface Iexercises {
    "bodyPart": "string";
    "equipment": "string";
    "gifUrl": "string";
    "id": "string";
    "name": "string";
    "target": "string";
} 


export const fetchData = async (endpoint: string, options: RequestInit | undefined) => {
    const response = await fetch(baseUrl + endpoint, options)
    const data:Array<any> = await response.json()

    return data
}
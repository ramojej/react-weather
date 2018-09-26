import axios from 'axios';

const API_KEY = '304418dcf5b9a7960175639d3d2ca8ee';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ph`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
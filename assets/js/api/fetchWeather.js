import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_Key = '1ed9d85540c90a79ef1df445946c7c4e';

export const fetchWeather = async (lon, lat) => {
    const {data} = await axios.get(URL, {
        params: {
            units: 'metric',
            appid: API_Key,
            lon: lon,
            lat: lat,
        }
    });

    return data;
};

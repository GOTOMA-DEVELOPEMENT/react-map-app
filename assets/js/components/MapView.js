import React, {Fragment, useState} from 'react';
import ReactMapGL from 'react-map-gl';
import {fetchWeather} from "../api/fetchWeather";
import axios from 'axios';
import WeatherDialog from './WeatherDialog'
import CircularProgress from "./CircualProgress";

const MAP_BOX_TOKEN = 'pk.eyJ1Ijoid2tyemFrIiwiYSI6ImNrazFmZWJ1ZzBxa2wyb3J1dG4yN3VteHgifQ.ScbjKno9g57iEy6_xNFIqA';

const MapView = () => {
    const [viewport, setViewport] = useState({
        latitude: 51.76,
        longitude: 19.46,
        zoom: 6,
        bearing: 0,
        pitch: 0
    });

    const [weatherInfoIsShown, setWeatherInfoIsShown] = useState(false);
    const [mapObjectToShow, setMapObjectToShow] = useState(null);
    const [loaderIsShown, setloaderIsShown] = useState(false);

    const getLocationData = async(e) => {
        e.preventDefault();
        setloaderIsShown(true);
        const data = await fetchWeather(e.lngLat[0], e.lngLat[1]);
        const preparedData = {
            "city": data.name,
            "temp": data.main.temp,
            "clouds": data.clouds.all,
            "windSpeed": data.wind.speed,
            "description": data.weather[0].description,
            "lat": data.coord.lat,
            "lon": data.coord.lon,
            "icon": data.weather[0].icon
        };

        axios.post('/list/create', preparedData)
            .then(response => {
                setloaderIsShown(false);
                setMapObjectToShow(preparedData);
                setWeatherInfoIsShown(true);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <Fragment>
            {loaderIsShown && (
                <CircularProgress/>
            )}
            <ReactMapGL
                {...viewport}
                width="100vw"
                height="100vh"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapboxApiAccessToken={MAP_BOX_TOKEN}
                onClick={getLocationData}
            />

            {weatherInfoIsShown && (
                <WeatherDialog mapObject={mapObjectToShow}
                               open={weatherInfoIsShown}
                               setWeatherInfoIsShown={setWeatherInfoIsShown}/>
            )}
        </Fragment>
    );
};

export default MapView;

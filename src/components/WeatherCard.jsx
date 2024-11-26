import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
    return (
        <div className="weather-card">
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Humidity: {weather.main.humidity} %</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
            <p>Condition: {weather.weather[0].description}</p>
        </div>
    );
};

export default WeatherCard;
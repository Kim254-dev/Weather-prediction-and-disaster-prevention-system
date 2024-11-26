import React, { useState } from 'react';
import { getWeatherData } from '../services/weatherService';
import WeatherCard from '../components/WeatherCard';
import './Dashboard.css';

const Dashboard = () => {
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [weather, setWeather] = useState(null);
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getWeatherData(city, email);
            setWeather(data.weather);
            setAlerts(data.alerts);
        } catch (error) {
            setError('Failed to fetch weather data.');
        }
        setLoading(false);
    };

    return (
        <div className="dashboard">
            <div className="background-image"></div>
            <div className="content">
                <h1>Weather Prediction and</h1>
                <h1>Disaster Prevention Sytem</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handleSearch} disabled={loading}>
                        {loading ? 'Loading...' : 'Search'}
                    </button>
                </div>
                {error && <div className="error-message">{error}</div>}
                {alerts.length > 0 && (
                    <div className="alerts">
                        {alerts.map((alert, index) => (
                            <div key={index} className="alert">
                                {alert}
                            </div>
                        ))}
                    </div>
                )}
                {weather && <WeatherCard weather={weather} />}
            </div>
        </div>
    );
};

export default Dashboard;
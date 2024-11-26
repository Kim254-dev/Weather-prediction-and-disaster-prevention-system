import axios from 'axios';

export const getWeatherData = async (city, email) => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/api/weather', {
            params: {
                city: city,
                email: email
            }
        });
        return response.data;
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        throw new Error('Error fetching weather data');
    }
};
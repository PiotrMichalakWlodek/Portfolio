import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const WeatherInput = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: calc(70% - 5px);
  &:focus {
    outline: none;
    border-color: #009578;
  }
  @media (max-width: 598px) {
    font-size: 0.9rem;
  }
  @media (max-width: 378px) {
    font-size: 0.8rem;
  }
  @media (max-width: 314px) {
    font-size: 0.7rem;
  }
`;

const CheckWeatherButton = styled.button`
  background-color: #009578;
  border: none;
  color: white;
  padding: 0.7rem 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  width: 12rem;
  &:hover {
    background-color: #008168;
  }
  &:active {
    background: #006e58;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
  @media (max-width: 378px) {
    font-size: 0.8rem;
  }
  @media (max-width: 314px) {
    font-size: 0.7rem;
  }
`;

const WeatherIconWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeatherIcon = styled.img`
  width: 60%;
  height: auto;
`;

const WeatherForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: -1rem;
`;
const WeatherComponent = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [hasError, setHasError] = useState(false);
    const getWeatherDetails = () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=e53301e27efa0b66d05045d91b2742d3`;
        axios.get(url)
            .then(response => {
                setWeatherData(response.data);
                setHasError(false);
            })
            .catch(error => {
                console.error("Error fetching weather data: ", error);
                setHasError(true);
            });
    };
    const getWeatherIcon = (iconId) => {
        switch (iconId) {
            case '11d': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/d11.png?alt=media&token=78be0f89-4506-413c-83c7-01ea895394a3";
            case '11n': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/d11.png?alt=media&token=78be0f89-4506-413c-83c7-01ea895394a3";
            case '09d': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/d09.png?alt=media&token=9d262d3e-51e7-4626-aa2a-9112f0b9d2ea";
            case '09n': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/d09.png?alt=media&token=9d262d3e-51e7-4626-aa2a-9112f0b9d2ea";
            case '10d': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/d10.png?alt=media&token=da65fdd4-0861-492c-81d2-fb8e9952f5a9";
            case '10n': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/d09.png?alt=media&token=9d262d3e-51e7-4626-aa2a-9112f0b9d2ea";
            case '13d': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/d13.png?alt=media&token=a900c8a2-d65a-4ffe-87c0-52666210411e";
            case '13n': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/d13.png?alt=media&token=a900c8a2-d65a-4ffe-87c0-52666210411e";
            case '50d': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/d50.png?alt=media&token=3f27e8d3-d10d-47b7-8780-134d56469f3f";
            case '50n': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/d50.png?alt=media&token=3f27e8d3-d10d-47b7-8780-134d56469f3f";
            case '01d': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/d01.png?alt=media&token=0b9c377d-e9ce-44f7-9e99-50366e5b6c29";
            case '01n': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/n01.png?alt=media&token=bff27f04-43a2-4382-99f4-f896d54b3fdd";
            case '02d': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/d02.png?alt=media&token=767550f9-133a-4ff0-bd06-3e01ad9c287f";
            case '02n': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/n02.png?alt=media&token=0714134c-e53f-44b6-af71-b75f4cc488fe";
            case '03d': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/d03.png?alt=media&token=3876a0f5-0b71-4cac-a1d0-7e7b924a6989";
            case '03n': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/n03.png?alt=media&token=da961e0d-37e1-4bd6-aab3-c503fb66c4e8";
            case '04d': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/d04.png?alt=media&token=0ee4bd73-cb06-41c1-9948-75e36e7f1de8";
            case '04n': return "https://firebasestorage.googleapis.com/v0/b/portfolio-580cb.appspot.com/o/n04.png?alt=media&token=33829a59-84f8-47c0-8780-e7c8cd5afa4a";
        }
    };

    return (
        <>
            <WeatherForm>
                <WeatherInput
                    type="text"
                    placeholder="Enter a location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <CheckWeatherButton onClick={getWeatherDetails}>
                    Check Weather
                </CheckWeatherButton>
            </WeatherForm>
            {!hasError && weatherData && (
                <div>
                    <WeatherIconWrapper>
                        <WeatherIcon
                            src={getWeatherIcon(weatherData.weather[0].icon)}
                            alt={weatherData.weather[0].description}
                        />
                    </WeatherIconWrapper>
                    <p>Current weather in the: {weatherData.name}</p>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Feels Like: {weatherData.main.feels_like}°C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                </div>
            )}
            {hasError && <p>Failed to fetch weather data. Please try again.</p>}
        </>
    );
};

export default WeatherComponent;
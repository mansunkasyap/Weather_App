import React from 'react'
import "./current-weather.css"
const CurrentWether = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather-descripton'>{data.weather[0].description}</p>
                </div>
                <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className='weather-icon' />
            </div>
            <div className="bottom">
                <p className="temprature">{Math.round(data.main.temp)}°C</p>

                <div className="details">
                    <div className="param-row">
                        <span className="param-label top">Details</span>
                    </div>
                    <div className="param-row">
                        <span className="param-label">Feels Like</span>
                        <span className="param-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="param-row">
                        <span className="param-label">Wind</span>
                        <span className="param-value">{data.wind.speed}</span>
                    </div>
                    <div className="param-row">
                        <span className="param-label">Humidity</span>
                        <span className="param-value">{data.main.humidity}%</span>
                    </div>
                    <div className="param-row">
                        <span className="param-label">Pressure</span>
                        <span className="param-value">{data.main.pressure}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWether
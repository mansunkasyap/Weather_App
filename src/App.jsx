import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import CurrentWether from './components/current-weather/CurrentWether';
import Forecast from './forecast/Forecast';
import { WAETHER_API_KEY, WAETHER_API_URL } from './api';

function App() {

  const [currentWeather, setcurrentWeather] = useState(null)
  const [foreCast, setforeCast] = useState(null)

  const handleonSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(' ');

    const currentWeatherfetch = fetch(`${WAETHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WAETHER_API_KEY}&units=metric`);
    const foreCastfetch = fetch(`${WAETHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WAETHER_API_KEY}&units=metric`);


    Promise.all([currentWeatherfetch, foreCastfetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()
        
        setcurrentWeather({ city: searchData.label, ...weatherResponse });
        setforeCast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error))
  }

  // console.log(currentWeather);
  // console.log(foreCast);
  return (
    <div className='container'>
      <Search onSearchChange={handleonSearchChange} />
      {currentWeather && <CurrentWether  data={currentWeather}/>}
      {foreCast && <Forecast data={foreCast}/>}
    </div>
  )
}

export default App

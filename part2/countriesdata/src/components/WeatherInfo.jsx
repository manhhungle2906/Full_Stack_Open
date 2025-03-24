import { useEffect, useState } from 'react'
import { getWeather } from '../services/openweather'

const WeatherInfo = ({ capital, lat, lon }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (lat && lon) {
      getWeather(lat, lon).then(data => setWeather(data))
    }
  }, [lat, lon])

  if (!weather) return null

  const temp = weather.main.temp
  const wind = weather.wind.speed
  const icon = weather.weather[0].icon
  const description = weather.weather[0].description

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>Temperature: {temp} °C</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>Wind: {wind} m/s</p>
    </div>
  )
}

export default WeatherInfo

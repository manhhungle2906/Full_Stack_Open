import axios from 'axios'

// 🔴 Nhét trực tiếp API key vào đây
const apiKey = 'b6a948623fc655c2d9c859c84d8d0521'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const getWeather = (lat, lon) => {
  const url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  return axios.get(url).then(res => res.data)
}

export { getWeather }

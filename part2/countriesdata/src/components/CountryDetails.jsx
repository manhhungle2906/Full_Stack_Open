import WeatherInfo from './WeatherInfo'

const CountryDetails = ({ country }) => {
  const languages = Object.values(country.languages || {})
  const flagUrl = country.flags?.png || ''

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Area: {country.area}</p>

      <h3>Languages:</h3>
      <ul>
        {languages.map(lang => <li key={lang}>{lang}</li>)}
      </ul>

      <img src={flagUrl} alt={`Flag of ${country.name.common}`} width="200" />

      <WeatherInfo
        capital={country.capital?.[0]}
        lat={country.latlng?.[0]}
        lon={country.latlng?.[1]}
      />
    </div>
  )
}

export default CountryDetails

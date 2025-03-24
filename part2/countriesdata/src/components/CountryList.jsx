import CountryDetails from './CountryDetails'
import { useState } from 'react'

const CountryList = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null)

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }

  if (countries.length === 1) {
    return <CountryDetails country={countries[0]} />
  }

  return (
    <ul>
      {countries.map(country => (
        <li key={country.cca3}>
          {country.name.common}{' '}
          <button onClick={() => setSelectedCountry(country)}>show</button>
          {selectedCountry?.name.common === country.name.common && (
            <CountryDetails country={selectedCountry} />
          )}
        </li>
      ))}
    </ul>
  )
}

export default CountryList

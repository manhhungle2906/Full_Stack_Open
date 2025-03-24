import { useEffect, useState } from 'react'
import { getAllCountries } from './services/countries'
import CountryList from './components/CountryList'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getAllCountries().then(data => setAllCountries(data))
  }, [])

  const filtered = allCountries.filter(country =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <div>
        find countries <input value={filter} onChange={handleFilterChange} />
      </div>
      <CountryList countries={filtered} />
    </div>
  )
}

export default App

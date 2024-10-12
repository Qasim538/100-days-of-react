import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { FaVirus, FaSkullCrossbones, FaHeartbeat } from 'react-icons/fa'

const ApiFetch = () => {
  const [globalData, setGlobalData] = useState(null)
  const [countryData, setCountryData] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState("")
  const [loading, setLoading] = useState(false)

  // Fetch Global COVID-19 data
  const fetchGlobalData = async () => {
    setLoading(true)
    try {
      const response = await axios.get('https://disease.sh/v3/covid-19/all')
      setGlobalData(response.data)
    } catch (error) {
      console.error("Error fetching global data", error)
    }
    setLoading(false)
  }

  // Fetch Country-specific COVID-19 data
  const fetchCountryData = async (country) => {
    if (country) {
      setLoading(true)
      try {
        const response = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`)
        setCountryData(response.data)
      } catch (error) {
        console.error("Error fetching country data", error)
      }
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGlobalData()
  }, [])

  // Handle Country Selection
  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value
    setSelectedCountry(selectedCountry)
    fetchCountryData(selectedCountry)
  }

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">COVID-19 Data Tracker</h1>

      {/* Loading Spinner */}
      {loading && (
        <div className="d-flex justify-content-center mb-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Global Data Section */}
      {!loading && globalData && (
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card card-stats shadow-sm bg-info text-white">
              <div className="card-body">
                <h5><FaVirus /> Global Cases</h5>
                <p className="card-number">{globalData.cases.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-stats shadow-sm bg-danger text-white">
              <div className="card-body">
                <h5><FaSkullCrossbones /> Global Deaths</h5>
                <p className="card-number">{globalData.deaths.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-stats shadow-sm bg-success text-white">
              <div className="card-body">
                <h5><FaHeartbeat /> Global Recovered</h5>
                <p className="card-number">{globalData.recovered.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Country Data Section */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h2>Country-specific Data</h2>
          <select className="form-select mb-3" value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select a country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            <option value="Brazil">Brazil</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Italy">Italy</option>
            <option value="Spain">Spain</option>
          </select>

          {countryData && (
            <div>
              <h3>📍 COVID-19 Statistics in {countryData.country}</h3>
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-stats shadow-sm bg-info text-white">
                    <div className="card-body">
                      <h5><FaVirus /> Cases</h5>
                      <p className="card-number">{countryData.cases.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-stats shadow-sm bg-danger text-white">
                    <div className="card-body">
                      <h5><FaSkullCrossbones /> Deaths</h5>
                      <p className="card-number">{countryData.deaths.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-stats shadow-sm bg-success text-white">
                    <div className="card-body">
                      <h5><FaHeartbeat /> Recovered</h5>
                      <p className="card-number">{countryData.recovered.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ApiFetch

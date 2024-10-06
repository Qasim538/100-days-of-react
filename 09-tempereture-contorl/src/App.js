import React, { useState } from 'react'


const App = () => {
  const [temperature, setTemperature] = useState(10)
  const [tempColor, setTempColor] = useState("natural")

  const addTemp = () => {
    setTemperature(temperature + 1)
    if(temperature >= 15){
      setTempColor("hot")
    }

  }
  const reduceTemp = () => {

    setTemperature(temperature - 1)
    if(temperature < 15){
      setTempColor("cold")
    }
  }

  return (
    <div className='app-container'>
    <div className='temperature-display-container'>
      <div className={`temperature-display ${tempColor}`}>{temperature}°C</div>
    </div>
    <div className="button-container">
      <button onClick={addTemp} >+</button>
      <button onClick={reduceTemp}>-</button>
    </div>

    </div>
  )
}

export default App

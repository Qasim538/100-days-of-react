import { useEffect, useState } from 'react';
import './App.css';

const url = 'https://cors-anywhere.herokuapp.com/https://course-api.com/react-tabs-project'


function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const res = await fetch(url)
    const newJobs = await res.json()
    console.log(newJobs);
    setJobs(newJobs)
    setLoading(false)
    
  }

  useEffect(() => {
    fetchJobs()
  }, [])


  return (
    <div className="App">
    
    </div>
  );
}

export default App;

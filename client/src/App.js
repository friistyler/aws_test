import {useState} from 'react'
import './App.css';

function App() {
  
  const [forecast, setForecast] = useState([]);
  const [apiError, setApiError] = useState("");

  const fetchForecastFromApi = () => {
    fetch('/api/WeatherForecast')
    .then(response => response.text())
    .then(data => Array.isArray(data) && setForecast(data))
    .catch(error => setApiError(error));
  }
  return (
    
    <div className="App">
      <header className="App-header">
        <button onClick={fetchForecastFromApi}>Click to query API</button>
        <table>
          <tbody>
        {console.log(forecast)}
          {            
            forecast && forecast.map(f => <tr key={f.date}><td>{f.date}</td><td>{f.temperatureC}</td><td>{f.temperatureF}</td><td>{f.summary}</td></tr>)
          }
          </tbody>
      </table>
      <div style={{color: "red"}}>{apiError}</div>
      </header>
    </div>
  );
}

export default App;

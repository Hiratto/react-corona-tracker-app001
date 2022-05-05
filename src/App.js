import {useState} from "react";
import countriesJson from "./countries.json";
import './App.css';
import TopPage from './pages/TopPage';

function App() {
  const [country,setCountry] = useState("");

  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }
  return (
    <div>
      <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData}/>
    </div>
  );
}

export default App;

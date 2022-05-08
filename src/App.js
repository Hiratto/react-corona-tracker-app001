import {useState} from "react";
import {Route, Switch, BrowserRouter } from "react-router-dom";
import countriesJson from "./countries.json";
import './App.css';
import TopPage from './pages/TopPage';

function App() {
  const [country,setCountry] = useState("");
  const [countryData,setCountryData] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: ""
  });

  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
    .then(res => res.json())
    .then(data => {
      setCountryData({
        date: data[ data.length -1 ].Date,
        newConfirmed: data[ data.length -1 ].Confirmed - data[ data.length -2 ].Confirmed,
        totalConfirmed: data[ data.length -1 ].Confirmed,
        newRecovered: data[ data.length -1 ].Recovered - data[ data.length -2 ].Recovered,
        totalRecovered: data[ data.length -1 ].Recovered
      });
    })
  }
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} countryData={countryData} />
          </Route>
          <Route exact path="/world">
            <p>ワールド</p>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;


// // 
// date:data[data.length1].Date,newConfirmed:data[data.length1].Confirmeddata[data.length2].Confirmed,//追加totalConfirmed:data[data.length1].Confirmed,newRecovered:data[data.length1].Recovereddata[data.length2].Recovered,//追加totalRecovered:data[data.length1].Recovered
// // 
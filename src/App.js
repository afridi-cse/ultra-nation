import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/Country/Country';
import Cart from './component/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  const [selectedCounty, setSelectedCountry]=useState([]);
  const handleAddCountry=(country)=>{
    setSelectedCountry([...selectedCounty, country])
  };
  return (
    <div className="App">
      <h1>Country Loaded{countries.length}</h1>
      <Cart selectedCounty={selectedCounty}></Cart>
      <ul>
        {
          countries.map(country=> <Country handleAddCountry={handleAddCountry} country={country} key={country.alpha3Code}></Country> )
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;

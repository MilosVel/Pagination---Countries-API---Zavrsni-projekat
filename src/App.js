// import logo from './logo.svg';
import Mapa from './Mapa.png';


// import './App.css';
import axios from 'axios'
import { useState, useEffect } from "react"
import Countries from './components/Countries.jsx';
import Search from './components/Search';
import Select from './components/Select';
import Sort from './components/Sort';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import { StyledNav } from './components/styledComponents';



function App() {
  const [user, setUser] = useState(null)

  const [countries, setCountries] = useState([])
  const [inputSearch, setInputSearch] = useState('')
  const [select, setSelect] = useState('')
  const [onPage, setOnPage] = useState([])
  const [countriesSelect, setCountriesSelect] = useState([])



  const [change, setChange] = useState(1)



  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(res => {
      setCountries(res.data)

      // setChange(prev => prev + 1)
    })
  }, [])

  function fja(countries, onPage) {

    if (onPage.length === 0) {
      return <Countries countries={countries.filter(country => country.name.common.includes(inputSearch))} select={select} inputSearch={inputSearch} setOnPage={setOnPage} countriesAll={countries} countriesSelect={countriesSelect} change={change} />
    } else {
      return <Countries countries={onPage.filter(country => country.name.common.includes(inputSearch))} select={select} inputSearch={inputSearch} setOnPage={setOnPage} countriesAll={countries} countriesSelect={countriesSelect} change={change} />
    }
  }

  return (
    <Router basename='/Pagination---Countries-API---Zavrsni-projekat'>
      <StyledNav>
        <Link to="/"><p>HOME</p></Link>
        <Link to="/login"><p>LOGIN</p></Link>
      </StyledNav>


      <Switch>
        <Route exact path='/'>
          <Home loggedIn={user} />
        </Route>

        <Route exact path="/countries">
          <Logout setUser={setUser} />
          <Select countries={countries} setSelect={setSelect} setOnPage={setOnPage} setCountriesSelect={setCountriesSelect} setChange={setChange} />
          <Search setInputSearch={setInputSearch} />
          <Sort countries={countries} onPage={onPage} setOnPage={setOnPage} select={select} setSelect={setSelect} setChange={setChange} change={change} />
          {fja(countries, onPage)}
        </Route>

        <Route exact path="/onlyPagination">

          {fja(countries, onPage)}
        </Route>

        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>

        <Route exact path="/register">
          <Register setUser={setUser} />
        </Route>

      </Switch>
    </Router >
  );
}
export default App;



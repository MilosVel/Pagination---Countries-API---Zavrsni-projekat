// import logo from './logo.svg';
import Mapa from './Mapa.png';


// import './App.css';
import axios from 'axios'
import { useState, useEffect } from "react"
import Countries from './components/Countries.jsx';
import Search from './components/Search';
import Select from './components/Select';
import Sort from './components/Sort';
import CountryRoute from './components/CountryRoute';

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
  const [reloadOnLogin, setReloadOnLogin] = useState(0)


  const [currPage, setCurrPage] = useState(0)



  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(res => {
      setCountries(res.data)

      // setChange(prev => prev + 1)
    })
  }, [reloadOnLogin])

  function fja(countries, onPage) {

    if (onPage.length === 0) {
      return <Countries countries={countries.filter(country => country.name.common.includes(inputSearch))} select={select} inputSearch={inputSearch} setOnPage={setOnPage} countriesAll={countries} countriesSelect={countriesSelect} change={change} currPage={currPage} setCurrPage={setCurrPage} />
    } else {
      return <Countries countries={onPage.filter(country => country.name.common.includes(inputSearch))} select={select} inputSearch={inputSearch} setOnPage={setOnPage} countriesAll={countries} countriesSelect={countriesSelect} change={change} currPage={currPage} setCurrPage={setCurrPage} />
    }
  }

  return (
    <Router basename='/Pagination---Countries-API---Zavrsni-projekat'>
      <StyledNav>
        <Link to="/"><h1>HOME</h1></Link>


        <h1>Countries</h1>

        <h1>Countries</h1>

        <Link to="/login"><h1>LOGIN</h1></Link>
      </StyledNav>


      <Switch>
        <Route exact path='/'>
          <Home loggedIn={user} />
        </Route>


        <Route exact path="/countries">
          <Logout setUser={setUser} />
          <Select countries={countries} setSelect={setSelect} setOnPage={setOnPage} setCountriesSelect={setCountriesSelect} setChange={setChange} setCurrPage={setCurrPage} />
          <Search setInputSearch={setInputSearch} />
          <Sort countries={countries} onPage={onPage} setOnPage={setOnPage} select={select} setSelect={setSelect} setChange={setChange} change={change} setCurrPage={setCurrPage} />
          {fja(countries, onPage)}
        </Route>

        <Route exact path="/onlyPagination">

          {fja(countries, onPage)}
        </Route>

        <Route exact path="/login">
          <Login setUser={setUser} setSelect={setSelect} setReloadOnLogin={setReloadOnLogin} />
        </Route>

        <Route exact path="/register">
          <Register setUser={setUser} />
        </Route>


        <Route exact path="/countries/:countryName">
          <CountryRoute countries={countries} />
        </Route>





      </Switch>
    </Router >
  );
}
export default App;



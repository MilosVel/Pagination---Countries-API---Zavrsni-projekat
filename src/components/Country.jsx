import axios from "axios";
import { useState, useEffect } from "react";
import { getAllCountries } from "../Service";
import { styledImg, StyledBtnForSingleCountry } from "./styledComponents";


import { Link } from 'react-router-dom'

const Country = ({ countries, country, single }) => {

    const [borders, setBorders] = useState([])

    const [indexPopulationAndArea, setindexPopulationAndArea] = useState(null)


    let [stateForBtnRangByPopulation, setStateForBtnRangByPopulation] = useState(false)
    let [stateForBtnBorders, setStateForBtnBorders] = useState(false)

    // useEffect(() => {


    // }, [])




    function rangByPopulationAndArea(countries, country) {

        let tmpPopulation = []
        countries.forEach(country => tmpPopulation.push(country.population))
        tmpPopulation.sort((a, b) => { if (a > b) return -1 })
        let indexPopulation = tmpPopulation.indexOf(country.population)


        let tmpArea = []
        countries.forEach(country => tmpArea.push(country.area))
        tmpArea.sort((a, b) => { if (a > b) return -1 })
        let indexArea = tmpArea.indexOf(country.area)


        return <>
            <b>
                <p> In aspect of population {country.name.common} is number {indexPopulation + 1} in the world with {tmpPopulation[indexPopulation]} citizens </p>
                <p>In ascpet of Area {country.name.common} is number {indexArea + 1} in the world with {tmpArea[indexArea]}    km^2</p>
            </b>
        </>
    }



    return single ?
        (

            <div >
                <h2>Basic information about {country.name.common}</h2>

                <p> <a href={country.maps.googleMaps} ><b>You can find {country.name.common} on google maps on this link </b> </a> </p>

                {/* BTN for Borders */}

                <div >
                    <StyledBtnForSingleCountry className={stateForBtnBorders ? 'transform' : ''} onClick={() => {

                        setStateForBtnBorders(!stateForBtnBorders)
                        console.log(country.borders.length)
                        console.log(country.borders)

                        if (borders.length < country.borders.length) {
                            country.borders.map(code => axios.get(`https://restcountries.com/v3.1/alpha/${code}`).then(res => {
                                setBorders(prev => [...prev, res.data[0].name.common])
                            }))
                        }
                    }}> {stateForBtnBorders ? `Hide ${country.name.common} 'Borders` : `Click here for ${country.name.common} 'Borders`} </StyledBtnForSingleCountry>


                    {
                        stateForBtnBorders ?

                            borders.length !== 0 ?
                                <>
                                    <b>
                                        <p> {country.name.common} has common border with {borders.length} countries:</p>

                                        <ul>{borders.map((border, i) => <li key={Math.random() * 1000}>{i + 1}: {border}  </li>)} </ul>

                                    </b>
                                </>
                                :
                                <></>

                            :
                            <></>
                    }
                </div>


                <b> <p>{country.name.common} has population of {country.population} citizens </p></b>





                {/* BTN Rang by Population */}
                <div>

                    <StyledBtnForSingleCountry className={stateForBtnRangByPopulation ? 'transform' : ''} onClick={() => {
                        console.log(countries);
                        setStateForBtnRangByPopulation(!stateForBtnRangByPopulation)

                        setindexPopulationAndArea(rangByPopulationAndArea(countries, country))

                    }}>{stateForBtnRangByPopulation ? 'Hide Rang By Population' : `Click to see Rang ${country.name.common} By Population`}</StyledBtnForSingleCountry>


                    {stateForBtnRangByPopulation ? <div>    {indexPopulationAndArea}</div> : <></>}

                </div>



                <p><b>Flag of {country.name.common}</b></p>

                <div>
                    <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={{ width: '150px' }} />
                </div>

            </div >
        )
        :
        (
            <div>
                {/* <h2>{country.name.common}</h2> */}


                <Link to={`/countries/${country.name.common}`}><h1>{country.name.common}</h1></Link>


                <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={{ width: '500px', height: '250px ' }} />


                {/* <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={{ width: '150px' }} /> */}




            </div>
        )

}

export default Country;
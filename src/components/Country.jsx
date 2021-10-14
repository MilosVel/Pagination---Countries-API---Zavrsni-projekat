import axios from "axios";
import { useState } from "react";
import { getAllCountries } from "../Service";
import { styledImg } from "./styledComponents";

const Country = ({ countries, country, single }) => {

    const [borders, setBorders] = useState([])

    const [indexPopulationAndArea, setindexPopulationAndArea] = useState(null)



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
            <p> In aspect of population {country.name.common} is number {indexPopulation + 1} in the world with {tmpPopulation[indexPopulation]} citizens </p>
            <p>In ascpet of Area {country.name.common} is number {indexArea + 1} in the world with {tmpArea[indexArea]}    km^2</p>
        </>
    }



    return single ?
        (

            <div >

                <h2>{country.name.common}</h2>

                <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={{ width: '150px' }} />

                <h2>Basic information about {country.name.common}</h2>
                <p>{country.name.common} has population of {country.population} citizens </p>
                <a href={country.maps.googleMaps} > You can find {country.name.common} on google maps</a>



                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181140.1199788969!2d20.282513414404647!3d44.815159728413235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2z0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1633977360243!5m2!1ssr!2srs" width="600" height="450" style={{ border: '0' }} loading="lazy"></iframe> */}



                <button onClick={() => {
                    country.borders.map(code => axios.get(`https://restcountries.com/v3.1/alpha/${code}`).then(res => {
                        setBorders(prev => [...prev, res.data[0].name.common])
                    }))
                }
                }>Click here for borders</button>
                {
                    borders.length !== 0 ?
                        <>
                            <p> {country.name.common} has common border with {borders.length} countries:</p>

                            <ul>{borders.map((border, i) => <li key={Math.random() * 1000}>{i + 1}: {border}  </li>)} </ul>

                            {/* <p>These countries are: {borders.map(border => <span>{border} </span>)} </p> */}
                        </>
                        :
                        <></>
                }



                <button onClick={() => {
                    console.log(countries);
                    setindexPopulationAndArea(rangByPopulationAndArea(countries, country))
                }}>Click to se Rang By Population</button>


                {
                    indexPopulationAndArea ?
                        <div>    {indexPopulationAndArea}</div>

                        :
                        <></>
                }


            </div >
        )
        :
        (
            <div>
                <h2>{country.name.common}</h2>

                <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={{ width: '500px', height: '250px ' }} />


                {/* <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style={{ width: '150px' }} /> */}




            </div>
        )

}

export default Country;
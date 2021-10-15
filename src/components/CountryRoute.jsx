import { useParams } from "react-router";

const CountryRoute = ({ countries }) => {

    // let obj = useParams()
    // console.log(obj)

    let { countryName } = useParams()
    // console.log(countryName)

    let country = countries.find(country => country.name.common == countryName)
    console.log(country)


    return (
        <div>
            <p>Radi</p>
            <img src={country?.flags.png} alt={`Flag of ${country?.name.common}`} style={{ width: '150px' }} />
            <p>Radi</p>



            <p>Radi</p>
        </div>
    );
}

export default CountryRoute;
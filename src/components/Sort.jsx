import { useState, useEffect } from "react"
const Sort = ({ countries, onPage, setOnPage, select, setChange, change, setCurrPage, user }) => {


    const [copyCountries, setCopyCountries] = useState(onPage)


    useEffect(() => {
        setCopyCountries(onPage.length == 0 ? [...countries] : onPage)

    }, [change, select, countries, user])



    const PopulationFrom9to1 = (a, b) => {
        if (a.population > b.population) {
            return -1
        }
    }
    const PopulationFrom1to9 = (a, b) => {
        if (a.population < b.population) {
            return -1
        }
    }

    const AreaFrom9to1 = (a, b) => {
        if (a.area > b.area) {
            return -1
        }
    }
    const AreaFrom1to9 = (a, b) => {
        if (a.area < b.area) {
            return -1
        }
    }



    return (
        <div>

            <select onChange={(e) => {

                console.log(e.target.value)

                if (e.target.value === 'PopulationFrom9to1') {

                    setOnPage(copyCountries.sort(PopulationFrom9to1))

                }
                if (e.target.value === 'PopulationFrom1to9') {

                    setOnPage(copyCountries.sort(PopulationFrom1to9))

                }


                if (e.target.value === 'AreaFrom9to1') {

                    setOnPage(copyCountries.sort(AreaFrom9to1))

                }
                if (e.target.value === 'AreaFrom1to9') {

                    setOnPage(copyCountries.sort(AreaFrom1to9))

                }



                setChange(prev => prev + 1)
                console.log(select)
                console.log(countries.filter(country => country.region.includes(select)))

                e.target.value = '-1'

                setCurrPage(0)

            }}>

                <option value='-1'> Choose option for sort</option>

                <option value='PopulationFrom9to1'>Sort By Population form Biggest to Lowest</option>
                <option value='PopulationFrom1to9'>Sort By Population form Lowest to Biggest</option>

                <option value='AreaFrom9to1'>Sort By Area form Biggest to Lowest</option>
                <option value='AreaFrom1to9'>Sort By Area form Lowest to Biggest</option>

            </select>

        </div >
    )
}
export default Sort;






import { useState, useEffect } from "react"
const Sort = ({ countries, onPage, setOnPage, select, setChange, change }) => {

    // let copyCountries = [...countries]
    const [copyCountries, setCopyCountries] = useState(onPage)

    // export const [change, setChange] = useState(1)



    useEffect(() => {
        setCopyCountries(onPage.length == 0 ? [...countries] : onPage)
    }, [change, select, countries])



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


    // console.log(countries);
    return (
        <div>
            {/* <button onClick={

                // setChange(prev=>[...prev,1])

                setOnPage(copyCountries.sort(PopulationFrom9to1))


            }>Sort Countries By Population form Biggest to Lowest</button>

            <button onClick={
                setOnPage(copyCountries.sort(PopulationFrom1to9))
            }>Sort Countries By Population form Lowest to Biggest </button> */}




            <select onChange={(e) => {
                // countries.forEach(country => console.log(country.population))
                // setOnPage(countries.sort(e.target.value))

                console.log(e.target.value)
                if (e.target.value === 'PopulationFrom9to1') {

                    setOnPage(copyCountries.sort(PopulationFrom9to1))



                }
                if (e.target.value === 'PopulationFrom1to9') {

                    setOnPage(copyCountries.sort(PopulationFrom1to9))

                }
                setChange(prev => prev + 1)
                console.log(select)
                console.log(countries.filter(country => country.region.includes(select)))

                e.target.value = '-1'
            }}>

                <option default selected value='-1'> Choose option for sort</option>


                <option value='PopulationFrom9to1'>Sort By Population form Biggest to Lowest</option>
                <option value='PopulationFrom1to9'>Sort By Population form Lowest to Biggest</option>

            </select>

        </div >
    )
}
export default Sort;


const Select = ({ countries, setSelect, setOnPage, setCountriesSelect, setCurrPage }) => {
    return (
        <select onChange={(e) => {
            setSelect(e.target.value)
            setOnPage(countries.filter(country => country.region.includes(e.target.value)))
            setCountriesSelect(countries.filter(country => country.region.includes(e.target.value)))
            e.target.value = '-1'
            setCurrPage(0)
        }} >

            <option value='-1'>Izaberi kontinent</option>

            <option value="" >All</option>
            {[...new Set(countries.map(country => country.region))].map(region => <option key={region} value={region}>{region}</option>)}
        </select>

    );
}

export default Select;
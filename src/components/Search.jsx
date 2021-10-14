const Search = ({ setInputSearch }) => {
    return (
        <input type='search' placeholder='search by name...' onChange={(e) => {
            setInputSearch(e.target.value)
            // console.log(inputSearch);
        }} />
    );
}

export default Search;
import Country from "./Country";
import { useState, useEffect } from "react";
import { StyledCountriesDiv } from "./styledComponents";
import { StyledBtnPagination } from "./styledComponents";


const Countreis = ({ countries, select, inputSearch, setOnPage, countriesAll, countriesSelect, change, currPage, setCurrPage, onPage }) => {
    // console.log(countriesSelect)
    let numPages = select ? Math.ceil(countriesSelect.length / 10) : Math.ceil(countriesAll.length / 10)
    // console.log(numPages);
    let [pages, setPages] = useState([])



    ///////////////////////////////////////////////////////////

    const [kopija, setKopija] = useState(countries)
    const [promenaKopije, setPromenaKopije] = useState(0)

    useEffect(() => {
        setKopija(onPage)
        console.log('sad se ucitala kopija')
        console.log(kopija)

    }, [select, change])

    // ////////////////////////////////////////////////////////////



    useEffect(() => {
        let tmp = []
        for (let i = 0; i < numPages; i++) {
            tmp.push(i)
        }
        setPages(tmp)
    }, [select, inputSearch, countries, change])


    const changePage = (page) => {
        setCurrPage(page)
        let start = page * 10
        let end = start + 10


        // select ? setOnPage(countriesSelect.slice(start, end)) : setOnPage(countriesAll.slice(start, end))


        // //////////////////////////////////////////////////////////////

        // console.log('ssssssssssssssss')
        // console.log(onPage)
        // console.log(kopija)
        // console.log(countries.slice(start, end))
        // console.log('ssssssssssssssss')

        //setPromenaKopije((prev) => prev + 1) // ne sme da se kuca

        // setOnPage(kopija.slice(start, end))


        setOnPage(kopija.length !== 0 ? kopija.slice(start, end) : countriesAll.slice(start, end))

        // /////////////////////////////////////////////////////

    }




    return (
        <div style={{
            background: 'grey'
        }}>
            <StyledBtnPagination disabled={currPage >= pages.length - 1} onClick={() => { changePage(currPage + 1) }}>Next</StyledBtnPagination>


            {
                pages.map(page => <StyledBtnPagination className={page == currPage ? 'transform' : ''} key={Math.random() * 1000000} onClick={() => { changePage(page) }
                }> {page + 1} </StyledBtnPagination>)
            }


            <StyledBtnPagination value='Preview' disabled={currPage <= 0} onClick={() => { changePage(currPage - 1) }}> Preview </StyledBtnPagination>


            <StyledCountriesDiv  >
                {countries.map(country => <Country key={country.name.official} countries={countriesAll} country={country} single={countries.length === 1} />)}
            </StyledCountriesDiv>

        </div >

    );
}

export default Countreis;












// // //////////////////////////////////////////////////////////////////////////////////////////

// // Ovo ispod je ako se u paginaciji ne zadrzava opcija sort 








// import Country from "./Country";
// import { useState, useEffect } from "react";
// import { StyledCountriesDiv } from "./styledComponents";
// import { StyledBtnPagination } from "./styledComponents";


// const Countreis = ({ countries, select, inputSearch, setOnPage, countriesAll, countriesSelect, change, currPage, setCurrPage, onPage }) => {
//     // console.log(countriesSelect)
//     let numPages = select ? Math.ceil(countriesSelect.length / 10) : Math.ceil(countriesAll.length / 10)
//     // console.log(numPages);
//     let [pages, setPages] = useState([])


//     // const [currPage, setCurrPage] = useState(0)



//     useEffect(() => {
//         let tmp = []
//         for (let i = 0; i < numPages; i++) {
//             tmp.push(i)
//         }
//         setPages(tmp)
//     }, [select, inputSearch, countries, change])


//     const changePage = (page) => {
//         setCurrPage(page)
//         let start = page * 10
//         let end = start + 10
//         console.log(onPage);
//         console.log(countriesSelect);

//         select ? setOnPage(countriesSelect.slice(start, end)) : setOnPage(countriesAll.slice(start, end))


//         // let copyOnPage = [...onPage]

//         // select ? setOnPage(copyOnPage.slice(start, end)) : setOnPage(countriesAll.slice(start, end))

//         // console.log('ssssssssssssssss')
//         // console.log(onPage)
//         // console.log('ssssssssssssssss')
//     }

//     return (
//         <div >
//             <StyledBtnPagination disabled={currPage >= pages.length - 1} onClick={() => { changePage(currPage + 1) }}>Next</StyledBtnPagination>


//             {pages.map(page => <StyledBtnPagination className={page == currPage ? 'transform' : ''} key={Math.random() * 1000000} onClick={() => { changePage(page) }
//             }> {page + 1} </StyledBtnPagination>)}


//             {/*             
//             {pages.map(page => <StyledBtnPagination key={Math.random() * 1000000} onClick={() => { changePage(page) }
//             }> {page} </StyledBtnPagination>)} */}




//             <StyledBtnPagination value='Preview' disabled={currPage <= 0} onClick={() => { changePage(currPage - 1) }}> Preview </StyledBtnPagination>




//             <StyledCountriesDiv  >
//                 {/* {countries.slice(0, 10).map(country => <Country key={country.name.official} country={country} />)} */}
//                 {countries.map(country => <Country key={country.name.official} countries={countriesAll} country={country} single={countries.length === 1} />)}
//             </StyledCountriesDiv>

//         </div >

//     );
// }

// export default Countreis;






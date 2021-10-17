import { useHistory } from "react-router";

import { StyledLogoutButton, Logoutdiv } from './styledComponents'

import { StyledLoginandRegisterButton } from "./styledComponents";


const Logout = ({ setUser, setOnPage, countries, setSelect, setCurrPage, setInputSearch }) => {

    const history = useHistory()

    return (

        <div>
            <StyledLogoutButton onClick={() => {

                setUser(null)
                setSelect('')
                setOnPage(countries)

                setCurrPage(0)

                setInputSearch('')

                console.log(countries)
                history.push('/')
            }}>LOGOUT</StyledLogoutButton>

        </div >
    );
}

export default Logout;

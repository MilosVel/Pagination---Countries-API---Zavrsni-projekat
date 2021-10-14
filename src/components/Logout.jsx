import { useHistory } from "react-router";

import { StyledLogoutButton, Logoutdiv } from './styledComponents'
const Logout = ({ setUser }) => {

    const history = useHistory()

    return (
        <Logoutdiv>

            <button onClick={() => {
                setUser(null)
                history.push('/home')
            }}>Logout</button>




            {/* <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>


            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>


            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button> */}


        </Logoutdiv >
    );
}

export default Logout;
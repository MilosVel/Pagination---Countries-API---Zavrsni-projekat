import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllUsers } from '../Service';


import { StyledLoginandRegisterButton } from './styledComponents'
import { LoginDiv } from './styledComponents'

const Login = ({ setUser }) => {

    const [users, setUsers] = useState([])

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const history = useHistory()

    useEffect(() => {
        getAllUsers().then(res => {
            //console.log(res.data)
            setUsers(res.data)
        })
    }, [])

    return (
        <LoginDiv>
            <form onSubmit={(e) => {
                e.preventDefault()

                let user = users.find(el => el.username === username && el.password === password)
                //console.log(user);
                if (user) {
                    setUser(user)
                    history.push("/countries")
                } else {
                    console.log('neispravni podaci');
                }

            }}>
                <div>
                    <p>Username</p>
                    <input type="text" placeholder="type your username..." onChange={(e) => { setUsername(e.target.value) }} />
                </div>

                <div>
                    <p>Password</p>
                    <input type="password" placeholder="Password..." onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <StyledLoginandRegisterButton type="submit" value="Login" />




                <div>
                    <Link to="/register">Registrujte se</Link>
                </div>

            </form>

        </LoginDiv>
    );
}

export default Login;




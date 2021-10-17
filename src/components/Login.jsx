import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllUsers } from '../Service';


import { StyledLoginandRegisterButton } from './styledComponents'
import { LoginAndRegisterDiv } from './styledComponents'

const Login = ({ setUser, setSelect, setReloadOnLogin, setCurrPage, setOnPage, countries }) => {

    const [users, setUsers] = useState([])

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const history = useHistory()

    useEffect(() => {

        getAllUsers().then(res => {
            setUsers(res.data)
            setReloadOnLogin(prev => prev + 1)
        })
        setSelect('')

    }, [])

    return (
        <LoginAndRegisterDiv>
            <form onSubmit={(e) => {
                e.preventDefault()

                setSelect('')
                setReloadOnLogin(prev => prev + 1)
                setCurrPage(0)
                setOnPage(countries)

                let user = users.find(el => el.username === username && el.password === password)

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
                    <Link to="/register">Create Your Account</Link>
                </div>

            </form>

        </LoginAndRegisterDiv>
    );
}

export default Login;




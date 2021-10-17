import { useState } from "react";
import { useHistory } from "react-router";
import { postNewUser, getAllUsers } from "../Service";

import { StyledLoginandRegisterButton, LoginAndRegisterDiv } from './styledComponents'

const Register = ({ setUser }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const history = useHistory()

    return (
        <LoginAndRegisterDiv>


            <form onSubmit={(e) => {
                e.preventDefault()

                let newUser = { username, password, email }

                getAllUsers().then(res => {
                    if (!res.data.some(user => user.username === username || user.email === email)) {

                        postNewUser(newUser).then(res => {
                            setUser(res.data) //mada i ne mora
                            history.push('/countries')
                        })
                    } else {
                        console.log('Postoji korisnik sa istim usernamom i passwordom');
                    }
                })

            }}>
                <div>
                    <p>Username</p>
                    <input type="text" placeholder="Username..." onChange={(e) => { setUsername(e.target.value) }} />
                </div>

                <div>
                    <p>Email</p>
                    <input type="email" placeholder="Email..." onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div>
                    <p>Password</p>
                    <input type="password" placeholder="Password..." onChange={(e) => { setPassword(e.target.value) }} />
                </div>

                <div>
                    <StyledLoginandRegisterButton type="submit" value="Register" />
                </div>
            </form>
        </LoginAndRegisterDiv>
    )
}
export default Register;



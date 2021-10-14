import { useState } from "react";
import { useHistory } from "react-router";
import { postNewUser, getAllUsers } from "../Service";

import { StyledLoginandRegisterButton } from './styledComponents'

const Register = ({ setUser }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const history = useHistory()

    return (
        <>


            <form onSubmit={(e) => {
                e.preventDefault()

                let newUser = { username, password, email }

                getAllUsers().then(res => {
                    if (!res.data.some(user => user.username === username || user.email === email)) {

                        postNewUser(newUser).then(res => {
                            //setUser(res.data)
                            history.push('/countries')
                        })
                    } else {
                        console.log('Postoji korisnik sa istim usernamom i passwordom');
                    }
                })

            }}>
                <input type="text" placeholder="Username..." onChange={(e) => { setUsername(e.target.value) }} />
                <input type="email" placeholder="Email..." onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder="Password..." onChange={(e) => { setPassword(e.target.value) }} />
                {/* <input type="submit" value="Register" /> */}
                <StyledLoginandRegisterButton type="submit" value="Register" />
            </form>
        </>
    )
}
export default Register;







// import { useState } from "react";
// import { useHistory } from "react-router";
// import { getAllUsers, postUser } from "../service";

// const Register = ({ setUser }) => {

//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [email, setEmail] = useState('')

//     const history = useHistory()
//     const validPassword = (password) => password.length >= 8
//         && password.split('').some(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))
//         && password.split('').some(char => !isNaN(Number(char)))

//     return (
//         <>
//             <form onSubmit={(e) => {
//                 e.preventDefault()
//                 if (username.length < 4 && !validPassword(password)) {
//                     console.log('Neispravno, mora makar 4 karaktera,nije validna sifra...');
//                     return
//                 }
//                 getAllUsers().then(res => {
//                     if (!res.data.some(user => user.username === username || user.email === email)) {
//                         postUser(username, email, password).then(res => {
//                             setUser(res.data)
//                             history.push('/quotes')
//                         })
//                     }
//                 })

//             }}>
//                 <input type="text" placeholder="Username..." onChange={(e) => { setUsername(e.target.value) }} />
//                 <input type="email" placeholder="Email..." onChange={(e) => { setEmail(e.target.value) }} />
//                 <input type="password" placeholder="Password..." onChange={(e) => { setPassword(e.target.value) }} />
//                 <input type="submit" value="Register" />
//             </form>
//         </>
//     );
// }
// export default Register;
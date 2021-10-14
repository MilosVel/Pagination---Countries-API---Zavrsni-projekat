import axios from 'axios'

// export const getAllUsers = () => axios.get(`http://localhost:3006/users`)
export const getAllUsers = () => axios.get(`https://project-pagination.herokuapp.com/users`)

export const postNewUser = (user) => axios.post(`http://localhost:3006/users`, user)

export const getAllCountries = () => axios.get('https://restcountries.com/v3.1/all')
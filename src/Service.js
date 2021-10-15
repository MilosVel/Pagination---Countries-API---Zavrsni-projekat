import axios from 'axios'

// export const getAllUsers = () => axios.get(`http://localhost:3006/users`) // ovo je za LocalHost
export const getAllUsers = () => axios.get(`https://project-pagination.herokuapp.com/users`)

// export const postNewUser = (user) => axios.post(`http://localhost:3006/users`, user) // ovo je za LocalHost
export const postNewUser = (user) => axios.post(`https://project-pagination.herokuapp.com/users`, user)

export const getAllCountries = () => axios.get('https://restcountries.com/v3.1/all')
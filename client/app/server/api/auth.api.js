import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:3950" })

export const loginApi = (userData, token) => API.post('/login', userData, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
export const registerApi = (userData, token) => API.post('/register', userData, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})

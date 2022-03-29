import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:3950" })

export const regardsApi = async (token) => {

    const res = await API.get('/regards', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return res;
}

export const getRegardApi = async (token, id) => {

    const res = await API.get(`/regards/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return res;
}

export const createRegardApi = async (token, data) => {

    const res = await API.post('/createregards', data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return res;
}

export const removeRegardApi = async (token, id) => {

    const res = await API.delete(`/regards/remove/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return res;
}

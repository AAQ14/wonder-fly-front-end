import axios from "axios";
const baseURL = import.meta.env.VITE_BACKEND_URL

const create = async(data) =>{
    try {
        const url = `${baseURL}/flights/add`
        console.log(url)
        const res = await axios.post(url,data)
        return res
    } catch (err) {
        console.log(err)
        return err
    }
}

const index = async ()=>{
    try {
        const url = `${baseURL}/flights`
        const res = await axios.get(url)
        return res.data
    } catch (err) {
        console.log(err)
        return err
    }
}

const deleteFlight = async (id)=>{
    try {
        const url = `${baseURL}/flights/delete/${id}`
        console.log(url)
        const res = await axios.delete(url)
        return res
    } catch (err) {
        console.log(err)
        return err
    }
}

const flightDetails = async (id) =>{
    try {
        const url = `${baseURL}/flights/${id}`
        const res = await axios.get(url)
        return res.data
    } catch (err) {
        console.log(err)
        return err
    }
}

const updateFlight = async (id, data)=>{
    try {
        const url = `${baseURL}/flights/update/${id}`
        const res = await axios.put(url, data)
        return res
    } catch (err) {
        console.log(err)
        return err
    }
}
export {
    create,
    index,
    deleteFlight,
    flightDetails,
    updateFlight
}
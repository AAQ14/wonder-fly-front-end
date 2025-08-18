import axios from "axios"
const baseURL= import.meta.env.VITE_BACKEND_URL

const userDetails = async (id)=>{
    try {
        const url = `${baseURL}/users/${id}`
        const res = await axios.get(url)
        console.log(url)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

export {
    userDetails
}
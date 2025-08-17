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

export {
    create
}
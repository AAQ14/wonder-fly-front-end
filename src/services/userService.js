import axios from "axios"
import { data } from "react-router"
const baseURL= import.meta.env.VITE_BACKEND_URL

const userDetails = async (id)=>{
    try {
        const url = `${baseURL}/users/${id}`
        const res = await axios.get(url)
        // console.log(url)
        return res.data
    } catch (err) {
        console.log(err)
        return err
    }
}

const updateUser = async (id,data) =>{
    try {
        const url = `${baseURL}/users/update/${id}`
        const res = await axios.put(url, data)
        return res
    } catch (err) {
        console.log(err)
        return err
    }
}

const deleteAccount=async(id)=>{
    try {
         const url = `${baseURL}/users/delete/${id}`
        const response = await axios.delete(url)
        return response 
    } catch (error) {
        return error
    }
}


export {
    userDetails,
    updateUser,
    deleteAccount
}
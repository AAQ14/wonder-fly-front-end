import axios from "axios";
const baseUrl = import.meta.env.VITE_BACKEND_URL

const deleteAccount=async(id)=>{
    try {
         const url = `${baseUrl}/user/${id}`
        const response = await axios.delete(url)
        return response 
    } catch (error) {
        return error
    }
}

export{
    deleteAccount
}
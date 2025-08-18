import axios from "axios"
baseURL= import.meta.env.VITE_BACKEND_URL

const userDetails = async (id)=>{
    try {
        const url = `${baseURL}/users/${id}`

    } catch (err) {
        console.log(err)
    }
}

export {
    userDetails
}
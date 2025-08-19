import React from "react";
import { deleteAccount } from "../../services/userService";

const DeleteAccountButton=({getUserDetails, userId})=>{
    const handleDelete = async()=>{
        console.log(userId)
        const confirmDelete=window.confirm('Are you sure you want to delete this account?')
        if(!confirmDelete)return
        const res = await deleteAccount(userId)
        if(res.status == 200){
            getUserDetails()
        }
        
    }
    return(
        <button onClick={handleDelete}>Delete Account</button>
    )
}

export default DeleteAccountButton
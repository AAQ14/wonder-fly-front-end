import React from "react";
import { deleteAccount } from "../../../lib/api";

const DeleteAccountButton=({accountId, getId})=>{
    const handleDelete = async()=>{
        const confirmDelete=window.confirm('Are you sure you want to delete this account?')
        if(!confirmDelete)return
        await deleteAccount(accountId)
        getId()
    }
    return(
        <button onClick={handleDelete}>Delete Account</button>
    )
}

export default DeleteAccountButton
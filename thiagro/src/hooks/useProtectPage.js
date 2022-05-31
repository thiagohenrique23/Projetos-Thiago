import React, {useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"

const UseProtectPage = () =>{
    const Navigate = useNavigate();
    
    useLayoutEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            Navigate("/")
        }
    },[Navigate])
}

export default UseProtectPage
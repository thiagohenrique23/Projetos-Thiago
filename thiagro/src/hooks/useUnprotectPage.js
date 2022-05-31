import React, {useLayoutEffect } from "react"
import { useNavigate } from "react-router-dom"

const UseUnprotectPage = () =>{
    const Navigate = useNavigate();
    
    useLayoutEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            Navigate("/feed")
        }
    },[Navigate])
}

export default UseUnprotectPage
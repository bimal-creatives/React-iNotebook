import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        localStorage.setItem('token', '')
        navigate('../login', { replace: true})
    }, [])
    
  return (
    <></>
  )
}

export default Logout
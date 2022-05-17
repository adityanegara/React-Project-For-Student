import { useEffect, useState } from "react"
import React from "react"
import logo from '../logo.svg';
import { getSession, auth } from "../api/auth"
import { useContext } from "react"
import { SessionContext } from "../context/SessionContext"

export default function Navbar() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const fetchSession = async () =>{
      await getSession().then((response) =>{
        if(response){
          setIsLoggedIn(true)
          setUser(response.data.user);
        }
      })
    }
    fetchSession()
  }, [isLoggedIn, setIsLoggedIn, setUser]
  )
  const renderLoginButton = (isLoggedIn) =>{
    return (isLoggedIn != true) ? 
    (<button aria-label="Login" onClick={auth}>
    Login
    </button>) : ''
  }
  const renderProfile = (isLoggedIn) =>{
    return (isLoggedIn == true) ? 
    ( <a aria-label="Profile">
    {user.name}
  </a>)
  : ''
  }
  return(
    <div aria-label="Navbar">
      <a href="/" aria-label="App Title">App Title</a>
      <img aria-label="App Logo" src={logo}/>
      {renderLoginButton(isLoggedIn)}
      {renderProfile(isLoggedIn)}
    </div>
  )
}

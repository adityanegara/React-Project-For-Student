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
    const fetchUser =  async () =>{
      try{
        let response = await getSession();
        if(response?.data?.user){
         setUser(response?.data?.user)
         setIsLoggedIn(true);
        }
      }catch (e){
        console.log(e);
      }
     
    }
    fetchUser();
  }, [isLoggedIn])

  const renderProfile = () =>{
    if(isLoggedIn){
      return(
        <p aria-label="Profile">{user.name}</p>
      )
    }
  }
  return(
    <div aria-label="Navbar">
      <a href="/" aria-label="App Title">App Title</a>
      <img aria-label="App Logo" src={logo}/>
      <button aria-label="Login" onClick={auth}>Login</button>
      {renderProfile()}
    </div>
  )
}

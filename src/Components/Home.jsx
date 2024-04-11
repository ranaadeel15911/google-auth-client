import React, { useState } from 'react'
// import jwt_decode from "jwt-decode";
import { jwtDecode } from "jwt-decode";
import { Link } from 'react-router-dom';
const Home = () => {
    const token = localStorage.getItem("token")
    const decoded = jwtDecode(token);
    // const [profile , setProfile]=useState()
    console.log(decoded)
    console.log(decoded.email)
  return (
    <>
    <Link to={'/login'}>Login</Link>
    <div>{
        decoded &&
        <>
        Emal : {decoded.email}
        Name : {decoded.name}
        { decoded.picture && 
          <img src={decoded.picture} alt="feck" />
        }
        </>
        }
        
        </div>
        </>
  )
}
export default Home
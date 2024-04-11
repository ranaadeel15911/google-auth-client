import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useGoogleOneTapLogin } from '@react-oauth/google';
const Abc = () => {
    const navigate = useNavigate()
// const clientId = "888088047039-tqvtiei4nt05q1avs3n1t1k48qf12v55.apps.googleusercontent.com";
// const response = {
//     name:"Adeel",
//     college:"Govt",
//     email:"email.com"
// }
const [ user, setUser ] = useState([]);
console.log(user)
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) =>
        setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });
    // const login = useGoogleLogin({
    //     onSuccess: (codeResponse) =>
    //     setUser(codeResponse),
    //     onError: (error) => console.log('Login Failed:', error)
    // });
    useEffect(
        () => {
            if (user) {
                
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then(async(res) => {
                        console.log(res.data)
                        const user = {
                            name:res.data.name,
                            email:res.data.email,
                            picture:res.data.picture
                        }
                        const resa =await axios.post("http://localhost:5000/google-auth",user) 
                        // setProfile(res.data);
                        console.log(resa)
                        if (resa.data) {
                            console.log(resa.data.token)
                            localStorage.setItem("token",resa.data.token)
                            navigate('/')
                        }
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile({});
    };
return (
<>
<div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {Object.keys(profile).length ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={login}>Sign in with Google 🚀 </button>
            )}
        </div>

</>
);
};

export default Abc;
/* <GoogleLogin
onSuccess={async(credentialResponse) => {
console.log("credentialResponse",credentialResponse);
const res =await axios.post("http://localhost:5000/google-auth",credentialResponse) 
console.log(res)
if (res.data) {
    console.log(res.data.token)
    localStorage.setItem("token",res.data.token)
navigate('/')
}
}}
onError={() => {
console.log("Login Failed");
}}
/> */
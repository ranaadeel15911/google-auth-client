import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const Abc = () => {
const clientId = "888088047039-tqvtiei4nt05q1avs3n1t1k48qf12v55.apps.googleusercontent.com";

return (
<GoogleOAuthProvider clientId={clientId}>
<GoogleLogin
onSuccess={credentialResponse => {
console.log(credentialResponse);
}}
onError={() => {
console.log("Login Failed");
}}
/>
</GoogleOAuthProvider>
);
};

export default Abc;

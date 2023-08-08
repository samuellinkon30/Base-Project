import React from "react";
import FormLogin from "../components/login/formLogin";
import LoginGoogle from "../components/login/loginGoogle";

const Login = () =>{
    return(
        <div>
            <FormLogin></FormLogin>
            <LoginGoogle></LoginGoogle>
        </div>
    )
}

export default Login
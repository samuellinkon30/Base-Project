import React, { useState } from "react";
import './formLogin.css';
import avatar from '../../assets/icon_avatar.png';
import LoginGoogle from "./loginGoogle";

const FormLogin = () =>{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [activeUser, serActiveUser] = useState();
    const [activePass, serActivePass] = useState();
  
    function handeSubmit(event){
        //Object User to verify access on API
        event.preventDefault();
        const loginObject = {
            username,
            password
        }
        console.log(loginObject)
    }
    function animationUserIn(){
        serActiveUser('animation')
    }
    function animationUserOut(){
        serActiveUser('animationfiled')
    }
    function animationPassIn(){
        serActivePass('animation')
    }
    function animationPassOut(){
        serActivePass('animationfiled')
    }
    return(
        <div className="login">
            <div className="section_login">
                <h1 className="title_login">Login</h1>
                <img className="imagem_login" src={avatar}/>
                <form className="form_login" onSubmit={handeSubmit}>
                    <div className="input_login">
                        <label className={`label_login ${activeUser} `}>Username</label>
                        <input onFocus={animationUserIn} onBlur={animationUserOut} onChange={(event) => { setUsername(event.target.value)}} className="input_form_login"/>
                    </div>
                    <div className="input_login">
                        <label className={`label_login ${activePass} `}>Password</label>
                        <input onFocus={animationPassIn} onBlur={animationPassOut} type="password" onChange={(event) => { setPassword(event.target.value)}}  className="input_form_login"/>
                    </div>
                    <div className="input_login_submit">
                        <input type="submit" className="input_form_submit"></input>
                    </div>
                </form>
                <LoginGoogle></LoginGoogle>
            </div>
        </div>
    )
}

export default FormLogin
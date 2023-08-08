import React from "react";
import avatar from '../../assets/icon_avatar.png';

const FormLogin = () =>{
    return(
        <div className="login">
            <div className="section_login">
                <img className="imagem_login" src={avatar}/>
                <form className="form_login">
                    <div className="input_login">
                        <labe className="label_login">Username</labe>
                        <input className="input_form"></input>
                    </div>
                    <div className="input_login">
                        <labe className="label_login">Password</labe>
                        <input className="input_form"></input>
                    </div>
                    <div className="input_login">
                        <input className="input_form_submit"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormLogin
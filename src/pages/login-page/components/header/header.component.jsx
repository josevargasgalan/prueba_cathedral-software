import React from 'react';
import './header.component.scss';

function Header() {
    return (
        <div class="header">
            <div class="logo">
                <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo"/>
            </div>
            <div class="login-form">
                <label>Correo electronico</label>
                <input type="text"></input>
                <label>Contraseña</label>
                <input type="text"></input> 
                <button>Entrar</button>
            </div>
        </div>
    );
  }
  
  export default Header;
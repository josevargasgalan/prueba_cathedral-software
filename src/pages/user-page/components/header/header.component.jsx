import React from 'react';
import './header.component.scss';

function HeaderComponent(props) {
   return (
    <div className="header">
    <div className="logo">
        <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo"/>
    </div>
    <div className="links">
        <span>{props.name}</span>
        <span>Notificaciones</span>
    </div>
</div>
   )
}

export default HeaderComponent;
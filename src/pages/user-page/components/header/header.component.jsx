import React from 'react';
import classes from './header.module.scss';

function HeaderComponent(props) {
   return (
    <div className={classes.header}>
    <div className={classes.logo}>
        <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo"/>
    </div>
    <div className={classes.links}>
        <span>{props.name}</span>
        <span>Notificaciones</span>
    </div>
</div>
   )
}

export default HeaderComponent;
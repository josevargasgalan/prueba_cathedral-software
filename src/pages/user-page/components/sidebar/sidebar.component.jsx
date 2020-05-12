import React from 'react';
import classes from './sidebar.module.scss';
import SidebarLink from './components/sidebar-link/sidebar-link.component';

function SidebarComponent(props) {
const links = props.links.map((link, i) => <SidebarLink name={link} key={i}></SidebarLink>)

    return(
        <div className={classes['sidebar-wrapper']}>
            <div className={classes.logo}>
                <img src={process.env.PUBLIC_URL + '/user.svg'} alt="logo"/>
            </div>
            <h3 style={{marginBottom:'10px'}}>Perfil de Jose</h3>
            <div className={classes['links-wrapper']}>
                {links}
            </div>
            <button className={classes['promotion-button']}>Promocionar</button>
        </div>
    )
}

export default SidebarComponent;
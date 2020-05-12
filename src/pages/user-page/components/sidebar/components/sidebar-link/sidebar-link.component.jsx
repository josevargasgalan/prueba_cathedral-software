import React from 'react';
import classes from './sidebar-link.module.scss';

function SidebarLinkComponent(props){
    return(
        <span className={classes.link}>{props.name}</span>
    )
}

export default SidebarLinkComponent;

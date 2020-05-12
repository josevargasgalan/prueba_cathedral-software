import React from 'react';
import './sidebar-link.component.scss';

function SidebarLinkComponent(props){
    return(
        <span className="link">{props.name}</span>
    )
}

export default SidebarLinkComponent;

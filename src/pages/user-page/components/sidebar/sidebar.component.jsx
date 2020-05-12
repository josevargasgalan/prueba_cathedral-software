import React from 'react';
import './sidebar.component.scss';
import SidebarLink from './components/sidebar-link/sidebar-link.component';

function SidebarComponent(props) {
const links = props.links.map((link, i) => <SidebarLink name={link} key={i}></SidebarLink>)

    return(
        <div className="sidebar-wrapper">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo"/>
            </div>
            <div className="links-wrapper">
                {links}
            </div>
        </div>
    )
}

export default SidebarComponent;
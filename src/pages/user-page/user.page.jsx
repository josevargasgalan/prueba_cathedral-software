import React from 'react';
import HeaderComponent from './components/header/header.component';
import SidebarComponent from './components/sidebar/sidebar.component';
import ProfileComponent from './components/profile/profile.component';
import classes from './user.module.scss';

function UserPage(props) {
  return (
    <React.Fragment>
      <HeaderComponent name={props.name}></HeaderComponent>
      <div className={classes['shell-wrapper']}>
        <SidebarComponent links={['Inicio', 'Informacion', 'Fotos']}></SidebarComponent>
        <ProfileComponent></ProfileComponent>
      </div>
    </React.Fragment>
  );
}

export default UserPage;

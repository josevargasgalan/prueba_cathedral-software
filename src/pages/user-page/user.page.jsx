import React from 'react';
import HeaderComponent from './components/header/header.component';
import SidebarComponent from './components/sidebar/sidebar.component';

function UserPage(props) {
  return (
    <React.Fragment>
      <HeaderComponent name={props.name}></HeaderComponent>
      <SidebarComponent links={['Inicio', 'Informacion', 'Fotos']}></SidebarComponent>
    </React.Fragment>
  );
}

export default UserPage;

import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderComponent from './components/header/header.component';
import SidebarComponent from './components/sidebar/sidebar.component';
import ProfileComponent from './components/profile/profile.component';
import classes from './user.module.scss';
import { Redirect } from 'react-router-dom';

class UserPage extends Component {
  render() {
    const userPage = this.props.isAuthenticated ? (
    <React.Fragment>
      <HeaderComponent name='Jose'></HeaderComponent>
      <div className={classes['shell-wrapper']}>
        <SidebarComponent links={['Inicio', 'Informacion', 'Fotos']}></SidebarComponent>
        <ProfileComponent></ProfileComponent>
      </div>
    </React.Fragment>) 
    : <Redirect to='/'></Redirect>
    return userPage
  }
}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.user.isAuthenticated,
      name: state.user.name
  };
}

export default connect(mapStateToProps)(UserPage);


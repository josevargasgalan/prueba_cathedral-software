import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../features/state/actions/index';
import classes from './header.module.scss';

class HeaderComponent extends Component {
    state = { logout : false };
    render() {
        const logoutMenu = this.state.logout ? (<div className={classes.logoutMenu} onClick={() => this.props.logout()}>Cerrar Sesion</div>) : null;
        return (
            <div className={classes.header}>
            <div className={classes.logo}>
                <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo"/>
            </div>
            <div className={classes.links}>
                <span className={classes.logout} onClick={() => this.setState({logout: true})}>{this.props.name}</span>
                {logoutMenu}
                <span>Notificaciones</span>
                <span className={classes.notifications}>4</span>
            </div>
        </div>
       )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actionCreators.logout())
    }
}
  
  export default connect(undefined, mapDispatchToProps)(HeaderComponent);
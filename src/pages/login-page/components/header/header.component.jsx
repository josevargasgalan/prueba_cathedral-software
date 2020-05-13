import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../features/state/actions/index';
import classes from './header.module.scss';

class HeaderComponent extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({...this.state, [event.target.name] : event.target.value})
    }

    login = () => {
        this.props.getUser(this.state.email, this.state.password);
    } 

    render() {
        return (
            <div className={classes.header}>
                <div className={classes.logo}>
                    <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo"/>
                </div>
                <div className={classes['login-form']}>
                    <label>Correo electronico</label>
                    <input type="text" name="email" onChange={ this.handleChange }></input>
                    <label>Contraseña</label>
                    <input type="password" name="password" onChange={ this.handleChange }></input> 
                    <button onClick={ () => this.login() }>Entrar</button>
                </div>
            </div>
        );
    }
  }


  const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (email, password) => dispatch(actionCreators.login(email, password))
    }
}
  
  export default connect(undefined, mapDispatchToProps)(HeaderComponent);
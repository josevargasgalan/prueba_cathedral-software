import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../features/state/actions/index';
import './header.component.scss';

class Header extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({...this.state, [event.target.name] : event.target.value})
    }

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo"/>
                </div>
                <div className="login-form">
                    <label>Correo electronico</label>
                    <input type="text" name="email" onChange={ this.handleChange }></input>
                    <label>Contraseña</label>
                    <input type="password" name="password" onChange={ this.handleChange }></input> 
                    <button onClick={ () => this.props.getUser(this.state.email, this.state.password) }>Entrar</button>
                </div>
            </div>
        );
    }
  }


  const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (email, password) => dispatch(actionCreators.getUser(email, password))
    }
}
  
  export default connect(undefined, mapDispatchToProps)(Header);
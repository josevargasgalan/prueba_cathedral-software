import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/header/header.component';

class LoginPage extends Component {
  goToUser = () => {
    this.props.history.push('/user');
  }

  render() {
    
    if(this.props.isAuthenticated) this.goToUser();

    return (
      <Header></Header>
     );
  }
}


const mapStateToProps = state => {
  return {
      isAuthenticated: state.user.isAuthenticated
  };
}

export default withRouter(connect(mapStateToProps)(LoginPage));
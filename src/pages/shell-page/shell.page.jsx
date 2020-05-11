import React, {Component} from 'react';
import { connect } from 'react-redux';
import UserPage from '../user-page/user.page';
import { Redirect } from 'react-router-dom';
import LoginPage from '../login-page/login.page';

class ShellPage extends Component {

    render() {
        const user = this.props.user.email !== '' ?  <UserPage></UserPage> /*<Redirect path={`/user/${this.props.user.id}`} 
        component={UserPage} />*/ : <LoginPage></LoginPage>;

        return user;
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(ShellPage);
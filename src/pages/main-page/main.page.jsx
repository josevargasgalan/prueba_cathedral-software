import React, {Component} from 'react';
import { connect } from 'react-redux';
import UserPage from '../user-page/user.page';
import LoginPage from '../login-page/login.page';

class MainPage extends Component {

    render() {
        const user = /*this.props.user.email !== '' ?*/  <UserPage name="Jose"></UserPage> /*<Redirect path={`/user/${this.props.user.id}`} 
        component={UserPage} />*/ /*: <LoginPage></LoginPage>;*/
        return user;
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(MainPage);
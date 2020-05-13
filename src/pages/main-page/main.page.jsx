import React, {Component} from 'react';
import UserPage from '../user-page/user.page';
import LoginPage from '../login-page/login.page';
import { Switch, Route } from 'react-router-dom';

class MainPage extends Component {
    
    render() {
        return (
            <Switch>
                <Route path="/user" exact component={UserPage} />
                <Route path="/" component={LoginPage} />
            </Switch>
        );
    }
}


export default MainPage;
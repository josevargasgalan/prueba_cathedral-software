import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../features/state/actions/index';
import classes from './header.module.scss';

function HeaderComponent(props) {
   return (
    <div className={classes.header}>
    <div className={classes.logo}>
        <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo"/>
    </div>
    <div className={classes.links}>
        <button onClick={() => props.logout()}>{props.name}</button>
        <span>Notificaciones</span>
        <span className={classes.notifications}>4</span>
    </div>
</div>
   )
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actionCreators.logout())
    }
}
  
  export default connect(undefined, mapDispatchToProps)(HeaderComponent);
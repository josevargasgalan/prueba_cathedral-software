import React from 'react';
import classes from './profile.module.scss';
import EventsComponent from './components/events/events.component'

function ProfileComponent() {
    return(
        <div className={classes['profile-wrapper']}>
            <EventsComponent></EventsComponent>
        </div>
    )
}

export default ProfileComponent;
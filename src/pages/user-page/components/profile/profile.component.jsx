import React from 'react';
import classes from './profile.module.scss';
import EventsComponent from './components/events/events.component'
import AddPublicationComponent from './components/add-publication/add-publication.component';

function ProfileComponent() {
    return(
        <div className={classes['profile-wrapper']}>
            <AddPublicationComponent></AddPublicationComponent>
            <EventsComponent></EventsComponent>
        </div>
    )
}

export default ProfileComponent;
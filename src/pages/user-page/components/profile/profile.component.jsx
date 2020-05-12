import React from 'react';
import classes from './profile.module.scss';
import EventsComponent from './components/events/events.component'
import AddPublicationComponent from './components/add-publication/add-publication.component';
import CreateMenuComponent from './components/create-menu/create-menu.component';
import ProfileHeaderComponent from './components/profile-header/profile-header.component';

function ProfileComponent() {
    return(
        <div className={classes['profile-wrapper']}>
            <ProfileHeaderComponent></ProfileHeaderComponent>
            <CreateMenuComponent></CreateMenuComponent>
            <AddPublicationComponent></AddPublicationComponent>
            <EventsComponent></EventsComponent>
        </div>
    )
}

export default ProfileComponent;
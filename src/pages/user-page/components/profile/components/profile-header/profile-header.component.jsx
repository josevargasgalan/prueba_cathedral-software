import React from 'react';
import classes from './profile-header.module.scss';

function ProfileHeaderComponent() {
    return(
        <div className={classes['profile-header-wrapper']}>
            <div className={classes.logo}>
            </div>
            <div className={classes['follow-buttons']}>
                <button>Te gusta</button>
                <button>Siguiendo</button>
                <button>Compartir</button>
            </div>
        </div>
    )
}

export default ProfileHeaderComponent;
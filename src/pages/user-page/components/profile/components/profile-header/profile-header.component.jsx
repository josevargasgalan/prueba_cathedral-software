import React from 'react';
import classes from './profile-header.module.scss';

function ProfileHeaderComponent() {
    return(
        <div className={classes['profile-header-wrapper']}>
            <div className={classes.logo}>
            </div>
            <div className={classes['follow-buttons-wrapper']}>
            <div className={classes['follow-buttons']}>
                <button>            
                    <div className={classes.icon}>
                        <img src={process.env.PUBLIC_URL + '/like.svg'} alt="logo"/>
                    </div>
                    <span>Te gusta</span>
                </button>
                <button>            
                    <div className={classes.icon}>
                        <img src={process.env.PUBLIC_URL + '/following.svg'} alt="logo"/>
                    </div>
                    <span>Siguiendo</span>
                </button>
                <button>            
                    <div className={classes.icon}>
                        <img src={process.env.PUBLIC_URL + '/share.svg'} alt="logo"/>
                    </div>
                    <span>Compartir</span>
               </button>
            </div>
            <div className={classes['send-message-button']}>
                <span>Enviar mensaje</span>
                <div className={classes.icon}>
                    <img src={process.env.PUBLIC_URL + '/pen.svg'} alt="logo"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeaderComponent;
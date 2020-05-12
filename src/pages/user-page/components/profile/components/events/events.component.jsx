import React from 'react';
import classes from './events.module.scss'

function EventsComponent() {
    return(
    <div className={classes['events-wrapper']}>
        <p className={classes.title}>Próximos eventos</p>
        <div className={classes['events-list-wrapper']}>
            <div className={classes.logo}>
                <img src={process.env.PUBLIC_URL + '/calendario.svg'} alt="logo"/>
            </div>
            <p><b>No hay eventos próximos</b></p>
            <p style={{color: 'grey'}}>Ayuda a los demás a encontrar tu próximo evento. Créalo en Facebook</p>
            <button>Crear evento</button>
            <button>Ver más</button>
        </div>
    </div>
    )
}

export default EventsComponent;
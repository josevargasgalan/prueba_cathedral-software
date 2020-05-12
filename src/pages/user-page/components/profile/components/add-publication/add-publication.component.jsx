import React from 'react';
import classes from './add-publication.module.scss';
import ChipComponent from '../../../../../../components/chip/chip.component';

function AddPublicationComponent() {
    const publicationOptions = [
        {text: 'Foto/video', icon: 'media'}, 
        {text:'Recibir mensaje', icon: 'facebook-messenger'}, 
        {text: 'Sentimiento/s', icon: 'emoji'},
    ];

    const chips = publicationOptions.map((option, i) => <ChipComponent text={option.text} icon={option.icon} key={i}></ChipComponent>)

    return(
        <div className={classes['add-publication-wrapper']}>
            <div className={classes.header}>Crear publicación</div>
            <div className={classes['add-publication']}>
                <div className={classes.logo}>
                    <img src={process.env.PUBLIC_URL + '/user.svg'} alt="logo"/>
                </div> 
                <span>Escribe una publicacion...</span>
            </div>
            <hr></hr>
            <div className={classes.options}>
                {chips}
            </div>
        </div>
    )
}

export default AddPublicationComponent;
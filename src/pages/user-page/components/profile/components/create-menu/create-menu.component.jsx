import React from 'react';
import classes from './create-menu.module.scss';
import ChipComponent from '../../../../../../components/chip/chip.component';

function CreateMenuComponent() {

    const publicationOptions = [
        {text: 'En vivo', icon: 'film'}, 
        {text:'Evento', icon: 'calendario'}, 
        {text: 'Oferta', icon: 'offer'},
        {text: 'Empleo', icon: 'suitcase'},
    ];

    const chips = publicationOptions.map((option, i) => <ChipComponent text={option.text} icon={option.icon} key={i}></ChipComponent>)

    return (
        <div className={classes['create-menu-wrapper']}>
            <span style= {{marginRight: '10px'}}><b>Crear</b></span>
            {chips}
        </div>
    )
}

export default CreateMenuComponent;
import React from 'react';
import classes from './chip.module.scss';

function ChipComponent(props) {
    const icon = props.icon ? (<div className={classes.icon}>
                                <img src={process.env.PUBLIC_URL + `/${props.icon}.svg`} alt="icon"/>
                              </div>)
                            : null;
    return (
        <div className={classes['chip-wrapper']}>
            {icon}
            <span className={classes.text}>{props.text}</span>
        </div>
    )
}

export default ChipComponent;
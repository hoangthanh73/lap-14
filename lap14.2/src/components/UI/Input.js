import React from 'react';
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {

    return (

        <div className={styles.input} {...props.control} >
            <label htmlFor={props.id}>{props.label}</label>
            <input {...props.input} id={props.id} ref={ref} />
        </div>
    )
})

export default Input;
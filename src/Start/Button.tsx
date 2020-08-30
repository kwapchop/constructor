import React from 'react';
import "./scss/button.scss";

type Button ={
    changeScreen: any
}

const Button: React.FC<Button> = (props) => {
    return (
        <button className="button button-white button-white--margin-top" onClick={props.changeScreen}>Создать схему</button>
    )
}

export default Button;
import React from 'react';

const ButtonComponent = (props) => {

    const deleteValues = () => {
        console.log(props.click);
    };
    return (<button onClick={deleteValues}>{props.buttonName}</button>);

};

export default ButtonComponent;

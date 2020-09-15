import React from 'react';
import './Entry.css';

const Entry = (props) => {
     const {variant='primary' ,children,...rest} = props;
    return (
        <>
            <button className={`button ${variant}`} {...rest}>{children}</button>
        </>
    );
};
export default Entry;
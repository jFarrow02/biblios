import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = props =>{
    const {children, onClick} = props;
    return(
        <button
            onClick={()=>{onClick()}}
        >{children}</button>
    )
}

export default PrimaryButton;

PrimaryButton.propTypes = {
    children: PropTypes.oneOfType(
        [
            PropTypes.string,
            PropTypes.element,
        ],
    ),
    onClick: PropTypes.func,
};

PrimaryButton.defaultProps = {
    children: 'Button',
    onClick: null,
};
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import stylesConfig from '../styles';

const SecondaryButton = props =>{
    const { children, onClick, disabled} = props;
    const StyledButton = styled.button`
        padding: 15px 25px;
        border: none;
        background: transparent;
        border: 1px solid ${ props=> { return stylesConfig.getType(props.type) }};
        color: ${ props => {return stylesConfig.getType(props.type);}};
        cursor: ${props => props.disabled ? 'normal' : 'pointer'};
        font-size: 18px;
        margin: 10px 15px 10px 0px;
    `;
    return(
        <StyledButton
            disabled={disabled}
            type={props.type}
            onClick={()=>{onClick()}}
        >
            {children}
        </StyledButton>
    );
}

export default SecondaryButton;

SecondaryButton.propTypes = {
    children: PropTypes.oneOfType(
        [
            PropTypes.string,
            PropTypes.element,
        ],
    ),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(
        [
            'normal',
            'caution',
            'alert',
            'warning',
            'disabled',
        ]
    ),
};

SecondaryButton.defaultProps = {
    children: 'Button',
    disabled: false,
    onClick: null,
    type: 'normal',
};
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import stylesConfig from '../../styles';

const SecondaryButton = props =>{
    const { children, onClick, disabled } = props;
    const getType = type =>{
        let color;
        switch(type){
            case 'caution':
                color = stylesConfig.yellow05;
                break;
            case 'alert':
                color = stylesConfig.orange05;
                break;
            case 'warning':
                color = stylesConfig.red05;
                break;
            case 'disabled':
                color = stylesConfig.gray05;
                break;
            case 'normal':
                default:
                    color = stylesConfig.blue05;
        }
        return color;
    }
    const StyledButton = styled.button`
        padding: 15px 25px;
        border: 1px solid ${ props => { return getType(props.type) }};
        border-radius: 20px;
        background: transparent;
        cursor: ${props => props.disabled ? 'normal' : 'pointer'};
        color: ${ props => {return getType(props.type) }};
        font-size: 18px;
    `;
    return(
        <StyledButton
            disabled={disabled}
            onClick={()=>{onClick()}}
            type={props.type}
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
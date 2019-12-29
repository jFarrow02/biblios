import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import stylesConfig from '../styles';

const PrimaryButton = props =>{
    const { children, onClick, disabled} = props;
    const StyledButton = styled.button`
        padding: 15px 25px;
        border: none;
        background: ${ props=> { return stylesConfig.getType(props.type) }};
        color: ${ props => {
            if(props.disabled){
                return stylesConfig.gray08;
            }
            return stylesConfig.white;
        }};
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

export default PrimaryButton;

PrimaryButton.propTypes = {
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

PrimaryButton.defaultProps = {
    children: 'Button',
    disabled: false,
    onClick: null,
    type: 'normal',
};
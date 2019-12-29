import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import stylesConfig from '../../styles';

const PrimaryButton = props =>{
    const { children, onClick} = props;
    const getType = type =>{
        let bgColor;
        switch(type){
            case 'caution':
                bgColor = stylesConfig.yellow05;
                break;
            case 'alert':
                bgColor = stylesConfig.orange05;
                break;
            case 'warning':
                bgColor = stylesConfig.red05;
                break;
            case 'disabled':
                bgColor = stylesConfig.gray05;
                break;
            case 'normal':
                default:
                    bgColor = stylesConfig.blue05;
        }
        return bgColor;
    }
    const StyledButton = styled.button`
        padding: 20px 30px;
        border: none;
        background: ${ props=> { return getType(props.type) }};
        color: ${stylesConfig.white};
        font-size: 18px;
    `;
    return(
        <StyledButton
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
    onClick: null,
    type: 'normal',
};
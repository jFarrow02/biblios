import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PrimaryButton = props =>{
    const {children, onClick} = props;
    const StyledButton = styled.button`
        padding: 20px 30px;
        border: none;
        background-color: #183bf0;
        color: #f7f0d4;
        font-size: 18px;
    `;
    return(
        <StyledButton
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
};

PrimaryButton.defaultProps = {
    children: 'Button',
    onClick: null,
};
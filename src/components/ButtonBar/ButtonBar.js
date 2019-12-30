import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import stylesConfig from '../styles';

const Button = styled.button`
    display: inline;
    border: none;
    background-color: ${props => props.backgroundColor ? props.backgroundColor :  stylesConfig.gray05};
    color: ${stylesConfig.white};
    font-size: ${props => props.fontSize ? props.fontSize : stylesConfig.buttonBar.fontSize};
    padding: 5px 25px;
    cursor: pointer;
    :hover {
        background-color: ${props => props.hoverBackground ? props.hoverBackground : stylesConfig.gray35};
    }
`;

const ButtonBar = props =>{
    const {backgroundColor, hoverBackground, color, content} = props;
    return(
        <div>
            {
                content.map((item, idx)=> {
                    return(
                        <Button
                            color={color}
                            backgroundColor={backgroundColor}
                            hoverBackground={hoverBackground}
                            key={idx}
                            onClick={(event)=>{item.clickHandler(event)}}
                        >
                            {item.content}
                        </Button>
                    )
                })
            }
        </div>
    )
}

export default ButtonBar;

ButtonBar.propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    content: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.element, PropTypes.object])
    ),
    fontSize: PropTypes.string,
    hoverBackground: PropTypes.string,
    onClick: PropTypes.func,
};

ButtonBar.defaultProps = {
    backgroundColor: null,
    color: null,
    content: [],
    fontSize: null,
    hoverBackground: null,
    onClick: null,
};
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import stylesConfig from '../styles';

const Link = styled.div`
        position: relative;
        background-color: ${props => props.initBgColor ? props.initBgColor : stylesConfig.gray01};
        width: ${props => props.width}px;
        color: ${props => props.color};
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
    `;

const LinkForeground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    width: 0;
    opacity: 0;
    font-size: 18px;
    transition: background-color 250ms ease-in-out, width 250ms ease-in-out, opacity 100ms ease-in-out;
    :hover{
        cursor: pointer;
    }
    ${Link}:hover & {
        background-color: ${props => props.newBgColor ? props.newBgColor : stylesConfig.gray08};
        width: ${props => props.width}px;
        opacity: 1;
    }
`;

const LinkContent = styled.div`
    background-color: transparent;
    color: ${props => props.color};
    font-size: 18px;
`;

const StyledLink = props => {
    return(
        <Link
            color={props.color}
            initBgColor={props.initBgColor}
            width={props.width}
        >
            <LinkForeground
                newBgColor={props.newBgColor}
                onClick={(e)=>{props.onClick(e);}}
                width={props.width}
            >
                {props.content}
            </LinkForeground>
            <LinkContent color={props.color}>{props.content}</LinkContent>
        </Link>
    )
}

export default StyledLink;

StyledLink.propTypes = {
    color: PropTypes.string,
    content: PropTypes.oneOfType(
        [PropTypes.element, PropTypes.string]
    ),
    destination: PropTypes.string,
    height: PropTypes.number,
    initBgColor: PropTypes.string,
    newBgColor: PropTypes.string,
    onClick: PropTypes.func,
    width: PropTypes.number,
};

StyledLink.defaultProps = {
    color: '#000000',
    content: 'Link',
    destination: '#',
    height: 125,
    initBgColor: stylesConfig.gray01,
    newBgColor: stylesConfig.gray08,
    onClick: null,
    width: 250,
}

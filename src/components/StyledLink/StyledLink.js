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
        padding-left: ${props => props.leftPadding}px;
    `;

const LinkForeground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: ${props => props.leftPadding}px;
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
    width: ${props => props.width};
    background-color: transparent;
    color: ${props => props.color};
    font-size: 18px;
`;

const StyledLink = props => {
    return(
        <Link
            color={props.color}
            initBgColor={props.initBgColor}
            leftPadding={props.leftPadding}
            width={props.width}
        >
            <LinkForeground
                leftPadding={props.leftPadding}
                newBgColor={props.newBgColor}
                onClick={(e)=>{props.onClick(e);}}
                width={props.width}
            >
                {props.content}
            </LinkForeground>
            <LinkContent color={props.color} width={props.width}>{props.content}</LinkContent>
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
    leftPadding: PropTypes.number,
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
    leftPadding: 20,
    newBgColor: stylesConfig.gray08,
    onClick: null,
    width: 250,
}

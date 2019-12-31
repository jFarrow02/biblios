import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import stylesConfig from '../styles';

const LinkForeground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    width: 0;
    transition: background-color 500ms ease-in-out, width 500ms ease-in-out, opacity 100ms ease-in-out;
    :hover{
        background-color: ${props => props.newBgColor ? props.newBgColor : stylesConfig.gray08};
        width: ${props => props.width}px;
        opacity: 1;

    }
    a{
        font-size: 18px;
    }
    a:link{
        color: black;
    }
`;

const LinkContent = styled.div`
    background-color: transparent;
    color: black;
    text-decoration: underline;
    font-size: 18px;
    :hover{
        cursor: pointer;
    }
`;

const StyledLink = props => {

    const Link = styled.div`
        position: relative;
        background-color: ${props => props.initBgColor ? props.initBgColor : stylesConfig.gray01};
        width: ${props.width}px;
        color: ${props.color};
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
    `;

    return(
        <Link>
            <LinkForeground width={props.width}>
                <a 
                    href={props.destination}
                >
                    {props.content}
                </a>
            </LinkForeground>
            <LinkContent>{props.content}</LinkContent>
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
    width: PropTypes.number,
};

StyledLink.defaultProps = {
    color: '#cccccc',
    content: 'Link',
    destination: '#',
    height: 125,
    width: 250,
}

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {StyledLink} from '../index';

const Nav = styled.nav`
    display: flex;
    flex-direction: ${props => props.direction};
    width: ${props => props.width}px;
`;

const LinkContainer = styled.div`
    border-bottom: ${props => props.direction === 'column' ? `1px solid ${props.color}` : ''};
    border-right: ${props => props.direction === 'row' ? `1px solid ${props.color}` : ''};
`;

const Navbar = props => {
    const {content} = props;
    return(
       <Nav
        direction={props.direction}
        width={props.width}
        >
           {
               content.map((item, idx)=> {
                   return(
                       <LinkContainer color={props.color} direction={props.direction}>
                         <StyledLink
                            content={item.content}
                            key={idx}
                        />
                       </LinkContainer>
                   
                   )
               })
           }
       </Nav>
    )
}

export default Navbar;

Navbar.propTypes = {
    color: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.object),
    direction: PropTypes.oneOf(['column', 'row']),
    width: PropTypes.number,
};

Navbar.defaultProps = {
    color: '#000000',
    content: [],
    direction: 'row',
    width: 350,
};


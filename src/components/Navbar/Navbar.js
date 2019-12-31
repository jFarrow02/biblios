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
    width: ${props => props.width + props.leftPadding + props.rightPadding}px;
    border-bottom: ${props => props.direction === 'column' ? `1px solid ${props.color}` : ''};
    border-right: ${props => props.direction === 'row' ? `1px solid ${props.color}` : ''};
    ${Nav} & :last-of-type{
        border: none;
    }
`;

const Navbar = props => {
    const {content, direction, leftPadding, rightPadding, width} = props;
    return(
       <Nav
        direction={direction}
        leftPadding={leftPadding}
        rightPadding={rightPadding}
        width={width}
        >
           {
               content.map((item, idx)=> {
                   return(
                       <LinkContainer
                            color={props.color}
                            direction={direction}
                            key={idx}
                            leftPadding={leftPadding}
                            rightPadding={rightPadding}
                            width={width}
                        >
                         <StyledLink
                            content={item.content}
                            leftPadding={leftPadding}
                            rightPadding={rightPadding}
                            width={width}
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
    leftPadding: PropTypes.number,
    rightPadding: PropTypes.number,
    width: PropTypes.number,
};

Navbar.defaultProps = {
    color: '#000000',
    content: [],
    direction: 'row',
    leftPadding: 0,
    rightPadding: 0,
    width: 350,
};


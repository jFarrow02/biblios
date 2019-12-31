import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {StyledLink} from '../index';

const Nav = styled.nav`
    display: inline-block;
    max-width: ${props => props.width}px;
`;

const LinkContainer = styled.div`
    width: ${props => props.width + props.leftPadding + props.rightPadding}px;
    border-bottom: 1px solid ${props => props.color};
    ${Nav} & :last-of-type{
        border: none;
    }
`;

const NavbarVertical = props => {
    const {content, leftPadding, rightPadding, width} = props;
    return(
       <Nav
        leftPadding={leftPadding}
        rightPadding={rightPadding}
        width={width}
        >
           {
               content.map((item, idx)=> {
                   return(
                       <LinkContainer
                            color={props.color}
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

export default NavbarVertical;

NavbarVertical.propTypes = {
    color: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.object),
    leftPadding: PropTypes.number,
    rightPadding: PropTypes.number,
    width: PropTypes.number,
};

NavbarVertical.defaultProps = {
    color: '#000000',
    content: [],
    leftPadding: 0,
    rightPadding: 0,
    width: 350,
};


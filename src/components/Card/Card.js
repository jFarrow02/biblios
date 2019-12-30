import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import stylesConfig from '../styles';

const StyledCard = styled.div`
        margin-top: 10px;
        margin-bottom: 10px;
        box-shadow: 3px 3px 5px 3px rgba(204, 204, 204, .5);
        max-width: ${props => props.width ? props.width : 500}px;
        display: flex;
        flex-direction: column;
        h1, h2, h3, h4, h5, h6{
            margin: 0px;
            margin-block-start: 0px;
            margin-block-end: 0px;
            padding: 10px;
        }
    `;

    const StyledContentHeader = styled.div`
        border-bottom: 1px solid ${stylesConfig.gray03};
    `;
    
    const StyledCardFooter = styled.div`
        background-color: ${stylesConfig.gray03};
    `;

    const StyledCardContent = styled.div`
        padding: 20px 10px;
    `;

const Card = props =>{

    const {content, footer, footerContent, header, headerContent} = props;
    
    return(
       <StyledCard>
           {
            header&&
           <StyledContentHeader>{headerContent}</StyledContentHeader>
           }
           <StyledCardContent>
               {content}
           </StyledCardContent>
           {
            footer&& 
            <StyledCardFooter>
                {footerContent}
            </StyledCardFooter>
           }
       </StyledCard>
    );
}

export default Card;

Card.propTypes = {
    content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    footer: PropTypes.bool,
    footerContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    header: PropTypes.bool,
    headerContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    width: PropTypes.PropTypes.number,
};

Card.defaultProps = {
    content: '',
    footer: false,
    footerContent: '',
    header: false,
    headerContent: '',
};
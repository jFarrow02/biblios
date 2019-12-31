import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import stylesConfig from '../styles';

const StyledCard = styled.div`
        margin-top: 10px;
        margin-bottom: 10px;
        box-shadow: 3px 3px 5px 3px rgba(102, 102, 102, .5);
        max-width: ${props => props.width ? props.width : 500}px;
        display: flex;
        flex-direction: column;
    `;

    const StyledBottomBorder = styled.div`
        background-color: ${props => props.footerColor ? props.footerColor : stylesConfig.gray03};
        width: 95%;
        height: 2px;
        margin: 0 auto;
    `;

    const StyledContentHeader = styled.div`
        padding: 20px 10px;
    `;
    
    const StyledCardFooter = styled.div`
        background-color: ${props => props.footerColor ? props.footerColor : stylesConfig.gray03};
        padding: 20px 10px;
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
            <React.Fragment>
                <StyledContentHeader>{headerContent}</StyledContentHeader>
                <StyledBottomBorder/>
            </React.Fragment>
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
    color: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    footer: PropTypes.bool,
    footerColor: PropTypes.string,
    footerContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    header: PropTypes.bool,
    headerContent: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    width: PropTypes.PropTypes.number,
};

Card.defaultProps = {
    color: null,
    content: '',
    footer: false,
    footerColor: null,
    footerContent: '',
    header: false,
    headerContent: '',
};
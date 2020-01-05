import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 250px 100px;
    border: 1px solid deeppink;
`;

const CarouselContainer = styled.div`
    grid-columns: 1 /span 1;
    grid-rows: 1 /span 1;
    position: relative;
    width: ${props => props.width || '100%'};
    margin: ${props => props.margin || '0 auto'};
`;

const CarouselContent = styled.div`
    position: absolute;
    z-index: ${props => props.index};
    height: 250px;
    border: 1px solid darkgreen;
`;

const CarouselControls = styled.div`
    grid-columns: 1 /span 1;
    grid-rows: 2 /span 1;
    border: 1px solid darkblue;
`;

const Carousel = props => {
    const {content} = props;
    return(
        <Wrapper>
            <CarouselContainer>
                {content.map((item, idx)=>{
                    return <CarouselContent
                        index={idx * 10}
                        key={idx}
                    >
                        {item}
                    </CarouselContent>
                })}
            </CarouselContainer>
            <CarouselControls>
                controls go here
            </CarouselControls>
        </Wrapper>
    )
};

export default Carousel;

Carousel.propTypes = {
    content: PropTypes.arrayOf(PropTypes.element),
    margin: PropTypes.string,
    width: PropTypes.string,
};

Carousel.defaultProps = {
    content: [],
    margin: null,
    width: null,
}
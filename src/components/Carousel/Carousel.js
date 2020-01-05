import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 250px auto;
    border: 1px solid deeppink;
    padding: 40px;
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
    opacity: 1;
`;

const CarouselControls = styled.div`
    grid-columns: 1 /span 1;
    grid-rows: 2 /span 1;
    border: 1px solid darkblue;
`;

const Carousel = props => {
    const {content} = props;
    let count = 0;
    const [carouselId, setCarouselId] = useState(null);
    const [contentLength, setContentLength] = useState(props.content.length);
    const intervalId = setInterval(()=>{
        console.log(count);
        if(count === content.length -1){
            count = 0;
        }else{
            count++;
        }
    }, 3000);
    console.log('intervalId:', intervalId);
    useEffect(()=>{
        return function clearCarousel(){
            window.clearInterval(intervalId);
        }
    })
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
                controls go here...now
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
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import stylesConfig from '../styles';

const ToastContainer = styled.div`
    position: relative;
    width: ${props => props.width};
    :hover{
        cursor: pointer;
    }
`;

const ToastChildren = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
`;

const ToastTab = styled.div`
    position: absolute;
    z-index: 10;
    display: inline-block;
    top: 0;
    left: ${props => props.left}px;
    opacity: 0;
    background-color: ${props => props.backgroundColor || stylesConfig.gray05};
    color: ${props => props.color || stylesConfig.white};
    border-radius: 55px;
    padding: 10px 20px;
    animation: ${props => props.animationName} 1000ms linear;
    @keyframes toast{
        0%{
            top: 0;
            opacity: 0;
        }
        5%, 85%{
            top: -75px;
            opacity: 1;
        }
        90%{
            top: -75px;
            opacity: .5;
        }
        100%{
            top: -75px;
            opacity: 0;
        }
    }
`;

const Toast = props =>{
    useEffect(()=>{
        function clearAnimationTimeout(){
                window.clearTimeout(animationId);
            }
        }
    );
    const [animationName, setAnimationName] = useState('');
    const [animationId, setAnimationId] = useState(null);
    const toggleToast = (name)=>{
        //Allow currently-in-progress animation to finish
        if(animationName){
            return;
        }
        setAnimationName(name);
        const animate = setTimeout(()=>{
               setAnimationName(null);
           }, 1050);
       
        setAnimationId(animate);
    };
    const {children, content} = props;
    return(
        <ToastContainer
            onClick={()=>{ toggleToast('toast'); }}
            style={props.styles}
        >
            <ToastTab
                animationName={animationName}
            >
                {content}
            </ToastTab>
            <ToastChildren>
                {children}
            </ToastChildren>
        </ToastContainer>
    )
};

export default Toast;

Toast.propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.oneOfType(
        [
            PropTypes.element,
            PropTypes.string,
        ]
    ),
    color: PropTypes.string,
    content: PropTypes.oneOfType(
        [
            PropTypes.element,
            PropTypes.string,
        ]
    ),
    left: PropTypes.number,
    width: PropTypes.string,
};

Toast.defaultProps = {
    backgroundColor: null,
    children: '',
    color: null,
    content: 'Toast',
    left: 0,
    width: '100%',
};

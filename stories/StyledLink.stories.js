import React from 'react';
import {StyledLink} from '../src/components';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

const actions = {
    onClick: action('onclick', ()=>{})
};

storiesOf('StyledLink', module)
    .add('default', ()=> <StyledLink onClick={actions.onClick}/>)
    .add('colors', ()=> <StyledLink color='#fff' initBgColor='#E72330' newBgColor='#a1121b' onClick={actions.onClick}/>)
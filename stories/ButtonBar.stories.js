import React from 'react';
import {ButtonBar} from '../src/components';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

const actions = {
    onclick01: action('onclick01', ()=>{}),
    onclick02: action('onclick02', ()=>{}),
    onclick03: action('onclick03', ()=>{}),
    onclick04: action('onclick04', ()=>{}),
    onclick05: action('onclick05', ()=>{}),
};

const content = [
    {content: 'Button01', clickHandler: actions.onclick01},
    {content: 'Button02', clickHandler: actions.onclick02},
    {content: 'Button03', clickHandler: actions.onclick03},
    {content: 'Button04', clickHandler: actions.onclick04},
    {content: 'Button05', clickHandler: actions.onclick05},
];

storiesOf('ButtonBar', module)
    .add('default', ()=> <ButtonBar content={content}/>)
    .add('with-colors', ()=> <ButtonBar content={content} backgroundColor='#0247FE' hoverBackground='#0130b2'/>)
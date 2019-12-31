import React from 'react';
import {Navbar} from '../src/components';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

const content = [
    {content: 'Link01',},
    {content: 'Link02',},
    {content: 'Link03',},
    {content: 'Link04',},
    {content: 'Link05',},
];

storiesOf('Navbar', module)
    .add('default', ()=> <Navbar content={content}/>)
    .add('column', ()=> <Navbar content={content} direction='column'/>)
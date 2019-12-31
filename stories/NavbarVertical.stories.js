import React from 'react';
import {NavbarVertical} from '../src/components';
import {storiesOf} from '@storybook/react';

const content = [
    {content: 'Link01',},
    {content: 'Link02',},
    {content: 'Link03',},
    {content: 'Link04',},
    {content: 'Link05',},
];

storiesOf('NavbarVertical', module)
    .add('default', ()=> <NavbarVertical content={content}/>)
    .add('column', ()=> <NavbarVertical content={content} direction={'column'} leftPadding={20} rightPadding={20} width={275}/>)
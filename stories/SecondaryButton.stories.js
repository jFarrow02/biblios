import React from 'react';
import {SecondaryButton} from '../src/components';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

const actions = {
    onclick: action('onClick'),
};

storiesOf('SecondaryButton', module)
    .add('default', ()=><SecondaryButton onClick={actions.onclick}/>)
    .add('default-caution', ()=><SecondaryButton type='caution' onClick={actions.onclick}/>)
    .add('default-alert', ()=><SecondaryButton type='alert' onClick={actions.onclick}/>)
    .add('default-warning', ()=><SecondaryButton type='warning' onClick={actions.onclick}/>)
    .add('default-disabled', ()=><SecondaryButton type='disabled' disabled={true} onClick={actions.onclick}/>)
import React from 'react';
import {PrimaryButton} from '../src/components';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

const actions = {
    onclick: action('default')
}

storiesOf('PrimaryButton', module)
    .add('default', ()=><PrimaryButton onClick={actions.onclick}/>)
    .add('default-caution', ()=><PrimaryButton type='caution' onClick={actions.onclick}/>)
    .add('default-alert', ()=><PrimaryButton type='alert' onClick={actions.onclick}/>)
    .add('default-warning', ()=><PrimaryButton type='warning' onClick={actions.onclick}/>)
    .add('default-disabled', ()=><PrimaryButton type='disabled' onClick={actions.onclick}/>)
import React from 'react';
import {PrimaryButton} from '../src/components';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

const actions = {
    onclick: action('default')
}

storiesOf('PrimaryButton', module)
    .add('default', ()=><PrimaryButton onClick={actions.onclick}/>)
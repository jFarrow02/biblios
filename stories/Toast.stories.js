import React from 'react';
import {Toast} from '../src/components';
import {storiesOf} from '@storybook/react';

const defaultChild = <div>This is some content.</div>;

storiesOf('Toast', module)
    .add('default', ()=><Toast styles={{marginTop: '100px'}}>{defaultChild}</Toast>)
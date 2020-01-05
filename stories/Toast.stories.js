import React from 'react';
import {Toast} from '../src/components';
import {storiesOf} from '@storybook/react';

const defaultChild = <div>This is some content.</div>;
const wrapper = <React.Fragment><div>This is wrapper content.</div><Toast>{defaultChild}</Toast></React.Fragment>
storiesOf('Toast', module)
    .add('default', ()=><Toast styles={{marginTop: '100px'}}>{defaultChild}</Toast>)
    .add('wrapped-toast', ()=><div style={{marginTop: '100px'}}>{wrapper}</div>)
import React from 'react';
import SecondaryButton from './SecondaryButton';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<SecondaryButton/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
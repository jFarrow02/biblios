import React from 'react';
import Card from './Card';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<Card/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
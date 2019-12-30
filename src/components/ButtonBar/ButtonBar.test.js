import React from 'react';
import ButtonBar from './ButtonBar';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<ButtonBar/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
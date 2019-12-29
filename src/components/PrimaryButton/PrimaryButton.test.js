import React from 'react';
import PrimaryButton from './PrimaryButton';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=> {
    const component = renderer.create(<PrimaryButton/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
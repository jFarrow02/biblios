import React from 'react';
import {Card} from '../src/components';
import {storiesOf} from '@storybook/react';

const ipsum = `Lorem ipsum dolor amet before they sold out wolf
typewriter pork belly occupy woke. VHS direct trade art party DIY
kogi readymade tumblr. Cred raw denim occupy, pop-up celiac edison
bulb master cleanse crucifix irony pinterest venmo selfies scenester
blog quinoa. Four dollar toast pinterest irony normcore, swag pickled
godard butcher synth la croix etsy VHS mumblecore. Synth tbh tilde
trust fund shoreditch, polaroid seitan normcore cornhole biodiesel lomo.`;

const footerContent = <h3>This is a Card</h3>

storiesOf('Card', module)
    .add('default', ()=> <Card/>)
    .add('with-content', ()=> <Card content={ipsum} width={500}/>)
    .add('with-footer', ()=> <Card content={ipsum} footer footerContent={footerContent} width={500}/>)
    .add('with-header', ()=> <Card content={ipsum} footer footerContent={footerContent} header headerContent={footerContent} width={500}/>)
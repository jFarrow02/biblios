import React from 'react';
import {Carousel} from '../src/components';
import {storiesOf} from '@storybook/react';

const ipsum = `Lorem ipsum dolor amet before they sold out wolf
typewriter pork belly occupy woke. VHS direct trade art party DIY
kogi readymade tumblr.`;

const ipsum2 = `Cred raw denim occupy, pop-up celiac edison
bulb master cleanse crucifix irony pinterest venmo selfies scenester
blog quinoa. Four dollar toast pinterest irony normcore.`;

const ipsum3 = `Swag pickled godard butcher synth la croix etsy VHS mumblecore. Synth tbh tilde
trust fund shoreditch, polaroid seitan normcore cornhole biodiesel lomo.`;

const content = [
    <div>{ipsum}</div>,
    <div>{ipsum2}</div>,
    <div>{ipsum3}</div>,
];

storiesOf('Carousel', module)
    .add('default', ()=><Carousel content={content}/>)
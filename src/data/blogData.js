import React from 'react';
import ResponsiveTable from '../blogItems/responsiveTable/components/Main';

let blogData =
    [
        {
            title: `New Site`,
            date: 'March 16, 2017',
            author: 'Rachel',
            summary: "Welcome to our new website",
            description: "I just finished this site using React. I had a lot of fun mocking it up and coding it into encapsulated components. I started the project using create-react-app, utilized functional programming, wrote logic in ES6 and styled it up with Sass. It's a mixture of all my favorite things!"
        },
        {
            title: 'Responsive Table',
            date: 'March 16, 2017',
            author: 'Rachel',
            summary: "Select what's important on this responsive table",
            description: "The table below is a responsive component that changes depending on the viewport size. As the viewport gets smaller less important items drop off. You can use the button in the upper right hand corner to filter what you see. Feel free to test it out.",
            visual: <ResponsiveTable />
        },
        {
            title: 'Inspiration',
            date: 'March 16, 2017',
            author: 'Rachel',
            summary: 'Inspired by Design',
            description: "While traveling, design surrounds me. Whether in the city, a small coffee shop, or in nature. So much color and my favorite finds are simplistic yet expressive. These inspirations have propelled me add design to my development work, more to come of this in the near future."
        },
        {
            title: 'SVGs',
            date: 'March 16, 2017',
            author: 'Rachel',
            summary: "They're pretty awesome",
            description: "I was a photographer for 7 years, so I was used to limitations when trying to make things larger. So I have a some serious excitement about SVGs ability to be any size. There are so many aspects to love about them, from their mathematical base to their ability to morph into what you need."
        },
        {
            title: 'Flexbox',
            date: 'March 16, 2017',
            author: 'Rachel',
            summary: 'Helpful Resources',
            description: <div><span>Almost two years ago, I learned flexbox and it continues to be one of my favorites. For some, it can be somewhat mysterious. If you're feeling this, I highly recommend Wes Bos' </span><a target="_blank" href="https://flexbox.io/" className="blogLink">What The FlexBox</a><span>. For reference, Chris Coyiers </span><a target="_blank" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" className="blogLink">A Complete Guide to Flexbox</a><span> is a must. And for fun, </span><a target="_blank" href="http://flexboxfroggy.com/" className="blogLink">Flexbox Froggy</a>.</div>
        },
    ];

export default blogData;
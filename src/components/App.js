import React from 'react';
import Main from './Main';

//react-scroll
let Scroll  = require('react-scroll');
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            to: '',
        };
        this.updateDimensions = this.updateDimensions.bind(this);
        this.handleSetActive = this.handleSetActive.bind(this);
    }
    componentWillMount() {
        this.updateDimensions();
        this.scrollToTop();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        scrollSpy.update();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    updateDimensions() {
        this.setState({width: window.innerWidth});
    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    handleSetActive(to) {
    }
    render() {
        return (
            <Main width={this.state.width} handleSetActive={this.handleSetActive} />
        );
    }
}

import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import data from '../data/blogData';
///react-scroll
let Scroll = require('react-scroll');
let Link = Scroll.Link;

export default (props) => {
    let mapData = data.map((item, i) => {
        return (
            <div className="menuItemContainer" key={i}>
                <MenuItem onTouchTap={props.handleClose} style={{fontSize: props.width > 800 ? 20 : 16}}><Link activeClass="active" to={item.title.replace(/\s+/g, '')} spy={true} smooth={true} offset={-50} duration={500}>
                    <div className="menuTitle">{item.title}</div>
                </Link></MenuItem>
                <div style={{fontSize: props.width > 800 ? 20 : 16}} className="summary">{item.summary}</div>
            </div>
        )
    })
    return (
        <div id="navigation">
            {mapData}
        </div>
    )
};

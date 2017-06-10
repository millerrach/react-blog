import React from 'react';
import blogData from '../data/blogData';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

let Scroll  = require('react-scroll');
let Element = Scroll.Element;

export default () => {
    return (
        <div id="blogBody">
            <div id="blog">
                <h1 id="blogTitle" className="sansBold">
                    <div>GEOMETRICS</div>
                    <div>BLOG</div>
                </h1>
                {blogData.map((item, i) => {
                    return (
                        <div id="postContainer" key={i}>
                            <Element id="postTitle" className="element sansBold " name={item.title.replace(/\s+/g, '')}>{item.title}</Element>
                            <p id="date" >{item.date}</p>
                            <div id="description">{item.description}</div>
                            <div id="visual">{item.visual}</div>
                            <MuiThemeProvider>
                                <List id="authorContainer">
                                    <ListItem
                                        disabled={true}
                                        style={{marginLeft: '-16px', display: 'inline-flex', alignItems: 'center'}}
                                        leftAvatar={
                                            <Avatar src={require(`../images/avatar/${item.author}.jpg`)} size={30} />
                                        }
                                    >
                                        <div id="author">Post By {item.author}</div>
                                    </ListItem></List>
                            </MuiThemeProvider>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}



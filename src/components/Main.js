import React from "react";
import DrawerDocked from './BlogDrawer';
import Blog from './Blog';
import SideBar from './BlogSideBar';

export default (props) => {
    let blogSideBar = props.width > 800 ?
        <SideBar width={props.width} handleSetActive={props.handleSetActive} />
        :
        <DrawerDocked width={props.width} handleSetActive={props.handleSetActive} />;
    return (
        <div>
            {blogSideBar}
            <Blog width={props.width} handleSetActive={props.handleSetActive} />
        </div>
    );
}
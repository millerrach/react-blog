import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import Navigation from './BlogNav';

export default (props) => {
    let style = {
        paddingTop: 20,
        boxShadow: 'none',
        textAlign: 'center',
        zIndex: 0,
        borderLeft: '1px solid rgba(204, 204, 204, .2)',
        width: '20%',
        fontSize: 5,
    }
    return (
        <MuiThemeProvider>
            <div id="sideBar">
                <Drawer
                    open={true}
                    docked={true}
                    containerStyle={style}
                >
                    <Navigation width={props.width} />
                </Drawer>
            </div>
        </MuiThemeProvider>
    );
}

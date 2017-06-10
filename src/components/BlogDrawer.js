import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Navigation from './BlogNav';
import Menu from 'material-ui/svg-icons/navigation/menu';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class DrawerDocked extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    render() {
        const styles = {
            smallIcon: {
                width: 36,
                height: 36,
                color: '#80C0D1',
            },
            mediumIcon: {
                width: 48,
                height: 48,
                color: '#80C0D1',
            },
            small: {
                width: 72,
                height: 72,
                padding: 16,
            },
            medium: {
                width: 120,
                height: 120,
                padding: 30,
            },
        };
        let width = this.props.width;
        return (
            <MuiThemeProvider>
            <div>
                <IconButton
                    onTouchTap={this.handleToggle}
                    iconStyle={width < 700 ? styles.smallIcon : styles.mediumIcon}
                    style={width < 700 ? styles.small : styles.medium}
                >
                    <Menu />
                </IconButton>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                    overlayStyle={{backgroundColor: '#ff4647'}}
                >
                    <div id="drawerLogoContainer">
                        <img id="mobileLogo" src={require(`../images/logo/logo-blue.svg`)} height="100" width="100" alt="icon" />
                    </div>
                    <Navigation width={this.props.width} handleClose={() => this.setState({open: false})}/>
                </Drawer>
            </div>
            </MuiThemeProvider>
        );
    }
}
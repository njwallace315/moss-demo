import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './theme'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import ReactSVG from 'react-svg';

class Layout extends Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">BRMS Vivarium Portal - WIMR</Typography>
                    </Toolbar>
                </AppBar>
                <ReactSVG src="./static/1485.svg" />
            </MuiThemeProvider>
        );
    }
}

export default Layout;
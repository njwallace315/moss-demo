import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'

class FloorPlan extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>Test</div>
            </MuiThemeProvider>
        );
    }
}

export default FloorPlan;
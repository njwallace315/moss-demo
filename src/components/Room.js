import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Bottom,
    Top,
    Left,
    Right,
    Middle
} from '../static/B1451.js'
// import { test } from '../static/B1451'
import { Grid } from '@material-ui/core';

class Room extends Component {
    render() {
        return (
            <div style={styles.root}>
                <Grid container >
                    <Grid item xs={12}>
                        <Top style={styles.img} />
                    </Grid>
                    <Grid item xs={1}>
                        <Left style={styles.img} />
                    </Grid>
                    <Grid item xs={10}>
                        <Middle style={styles.img} />
                    </Grid>
                    <Grid item xs={1}>
                        <Right style={styles.img} />
                    </Grid>
                    <Grid item xs={12}>
                        <Bottom style={styles.img} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Room.propTypes = {

};

const styles = {
    img: {
        display: 'block',
        width: '100%',
        height: '100%',
        margin: 0
    },
    root: {
        maxHeight: '100vh',
        maxWidth: '100vw'
    }
}

export default Room;
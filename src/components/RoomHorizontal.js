import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    TopHorizontal,
    BottomHorizontal,
    RightHorizontal,
    MiddleHorizontal,
    LeftHorizontal
} from '../static/B1451.js'

import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

class RoomHorizontal extends Component {
    render() {
        const { classes } = this.props;
        return (

            <div className={classes.root}>
                <Grid container direction="row" >
                    <Grid item xs={1}>
                        <LeftHorizontal className={classes.img} />
                    </Grid>
                    <Grid item xs={10} container direction="column">
                        <TopHorizontal className={classes.x} />
                        <MiddleHorizontal className={classes.xMain} />
                        <BottomHorizontal className={classes.x} />
                    </Grid>
                    <Grid item xs={1}>
                        <RightHorizontal className={classes.img} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

RoomHorizontal.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    img: {
        width: '100%',
        height: '100%',
        opacity: .5,
        '&:hover': {
            opacity: 1,
        },
    },
    x: {
        width: '100%',
        height: '15%',
        opacity: .5,
        '&:hover': {
            opacity: 1,
        },
    },
    xMain: {
        width: '100%',
        height: '70%',
    },
    root: {
        maxHeight: '100vh',
        maxWidth: '100vw'
    }
}

export default withStyles(styles)(RoomHorizontal);
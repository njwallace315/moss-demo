import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    BottomVertical,
    TopVertical,
    LeftVertical,
    RightVertical,
    MiddleVertical,
} from '../static/B1451.js'
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

class RoomVertical extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <TopVertical className={classes.img} />
                </Grid>
                <Grid item xs={1}>
                    <LeftVertical className={classes.img} />
                </Grid>
                <Grid item xs={10}>
                    <MiddleVertical className={classes.imgMain} />
                </Grid>
                <Grid item xs={1}>
                    <RightVertical className={classes.img} />
                </Grid>
                <Grid item xs={12}>
                    <BottomVertical className={classes.img} />
                </Grid>
            </Grid>
        );
    }
}



RoomVertical.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    imgMain: {
        width: '100%',
        height: '100%',
    },
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
        height: '90vh',
    }
}

export default withStyles(styles)(RoomVertical);
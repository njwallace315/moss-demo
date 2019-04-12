import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import EnvOverview from '../environment/EnvOverview'

const ContentBlocks = ({ classes, handleOpen }) => {
    return (
        <Grid container justify="space-between" className={classes.full}>
            <Grid item xs={6} className={classes.item}>
                <Card className={classes.card} />
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Card className={classes.card} />
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Card className={classes.card} />
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Card className={classes.card} />
            </Grid>
        </Grid>
    );
};

ContentBlocks.propTypes = {
    classes: PropTypes.object.isRequired,
    handleOpen: PropTypes.func.isRequired,
};

const styles = {
    full: {
        height: '100%',
        width: '100%'
    },
    item: {
        height: '50%',
        padding: 8
    },
    card: {
        height: '100%',
        width: '100%',
        opacity: .9
    },
}

export default withStyles(styles)(ContentBlocks);
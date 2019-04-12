import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import _ from 'lodash'
import moment from 'moment'
import ReportItem from '../room/ongoing/ReportItem'


const RoomDetailsContent = ({ classes, roomDetails }) => {
    return (
        <div>
            <List className={classes.list}>
                {roomDetails.map(x => {
                    return (
                        <ListItem className={classes.listItem}>
                            <Typography className={classes.inlineLabel} variant="subheading">
                                {x.label}:&nbsp;
                                </Typography>
                            <Typography className={classes.inline}>
                                {x.value}
                            </Typography>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    );
};

RoomDetailsContent.propTypes = {
    classes: PropTypes.object.isRequired,
    roomDetails: PropTypes.array,
};

RoomDetailsContent.defaultProps = {
    roomDetails: []
}

const styles = {
    title: {
        fontSize: 14,
    },
    inline: {
        display: 'inline',
        fontSize: '1.1em'
    },
    inlineLabel: {
        display: 'inline',
        fontWeight: 'bold',
        textDecoration: 'italics'
    },
    listItem: {
        padding: '0px 16px'
    },
    list: {
        padding: 0
    }
};

export default withStyles(styles)(RoomDetailsContent);
import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import { DialogTitle, List, ListItem, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment'

class OrdersList extends React.Component {

    getTitle = () => {
        const { order } = this.props
        let title = 'Order Details'
        if (order.type === 'lightSchedule') {
            title = 'Light Schedule Adjustment'
        } else if (order.type === 'maintenance') {
            title = 'Maintenance Request'
        }
        return title;
    }

    renderLight = () => {
        let { order, classes } = this.props;
        const {
            start,
            end
        } = order
        return (
            <div>
                {start && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Lights On At: </Typography>
                        <Typography className={classes.info}>{start}</Typography>
                    </div>
                )}
                {end && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Lights Off At: </Typography>
                        <Typography className={classes.info}>{end}</Typography>
                    </div>
                )}
            </div>
        )
    }

    renderMaintenance = () => {
        let { order, classes } = this.props;
        const {
            request,
            title,
            dateRequested,
            dueDate,
            itemName
        } = order
        return (
            <div>
                {title && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Title: </Typography>
                        <Typography className={classes.info}>{title}</Typography>
                    </div>
                )}
                {request && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Request Details: </Typography>
                        <Typography className={classes.info}>{request}</Typography>
                    </div>
                )}
                {itemName && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Applicable Inventory: </Typography>
                        <Typography className={classes.info}>{itemName}</Typography>
                    </div>
                )}
                {dateRequested && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Date Requested: </Typography>
                        <Typography className={classes.info}>{moment(dateRequested).format('hh:mm a MM/DD/YYYY')}</Typography>
                    </div>
                )}
                {dueDate && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Date Due: </Typography>
                        <Typography className={classes.info}>{moment(dueDate).format('hh:mm a MM/DD/YYYY')}</Typography>
                    </div>
                )}
            </div>
        )
    }


    render() {
        const { onClose, classes, order } = this.props;
        console.log('order: ', order)
        return (
            <div>
                <Dialog
                    open={true}
                    onClose={onClose}
                    aria-labelledby="form-dialog-title"
                    maxWidth="sm"
                    className={classes.root}
                >
                    <DialogTitle id="form-dialog-title">{this.getTitle()}</DialogTitle>
                    <DialogContent>
                        {order.type === 'lightSchedule' && this.renderLight()}
                        {order.type === 'maintenance' && this.renderMaintenance()}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const styles = {
    line: {
        display: 'block',
        width: '100%',
        margin: 5
    },
    label: {
        display: 'inline',
        fontWeight: 'bold'
    },
    info: {
        display: 'inline',
    }
}

OrdersList.propTypes = {
    order: PropTypes.object.isRequired,
}

OrdersList.defaultProps = {
}


export default withStyles(styles)(OrdersList);
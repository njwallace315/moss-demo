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

class NoticesList extends React.Component {

    getTitle = () => {
        const { type } = this.props
        let title = 'Notice Details'
        if (type === 'hazard') {
            title = 'Hazard Details'
        } else if (type === 'alert') {
            title = 'Alert Details'
        } else if (type === 'hazard') {
            title = 'Task Details'
        }
        return title;
    }

    renderHazard = () => {
        let { notice, classes } = this.props;
        const {
            agent,
            protocol,
            datePosted,
            effects,
            type,
            msds,
            postedBy,
            ppe,
            practices,
        } = notice
        return (
            <div>
                {agent && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Hazardous Agent: </Typography>
                        <Typography className={classes.info}>{agent}</Typography>
                    </div>
                )}
                {protocol && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Protocol: </Typography>
                        <Typography className={classes.info}>{protocol}</Typography>
                    </div>
                )}
                {datePosted && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Date Posted: </Typography>
                        <Typography className={classes.info}>{moment(datePosted).format('hh:mm a MM/DD/YYYY')}</Typography>
                    </div>
                )}
                {effects && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Effects: </Typography>
                        <Typography className={classes.info}>{effects}</Typography>
                    </div>
                )}
                {type && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Hazard Type: </Typography>
                        <Typography className={classes.info}>{type}</Typography>
                    </div>
                )}
                {msds && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>MSDS/CAS Identifier: </Typography>
                        <Typography className={classes.info}>{msds}</Typography>
                    </div>
                )}
                {postedBy && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Posted By: </Typography>
                        <Typography className={classes.info}>{postedBy}</Typography>
                    </div>
                )}
                {ppe && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>PPE Requirements: </Typography>
                        <Typography className={classes.info}>{ppe}</Typography>
                    </div>
                )}
                {practices && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Precautionary Practices: </Typography>
                        <Typography className={classes.info}>{practices}</Typography>
                    </div>
                )}
            </div>
        )
    }

    renderAlert = () => {
        let { notice, classes } = this.props;
        const {
            priority,
            message,
            dateFound,
            subject,
            targets,
            postedBy,
        } = notice
        return (
            <div>
                {priority && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Priority </Typography>
                        <Typography className={classes.info}>{priority}</Typography>
                    </div>
                )}
                {subject && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Subject: </Typography>
                        <Typography className={classes.info}>{subject}</Typography>
                    </div>
                )}
                {message && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Message: </Typography>
                        <Typography className={classes.info}>{message}</Typography>
                    </div>
                )}
                {dateFound && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Date Posted: </Typography>
                        <Typography className={classes.info}>{moment(dateFound).format('hh:mm a MM/DD/YYYY')}</Typography>
                    </div>
                )}
                {targets && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Target Audience: </Typography>
                        <Typography className={classes.info}>{targets}</Typography>
                    </div>
                )}
                {postedBy && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Posted By: </Typography>
                        <Typography className={classes.info}>{postedBy}</Typography>
                    </div>
                )}
            </div>
        )
    }

    renderTask = () => {
        let { notice, classes } = this.props;
        const {
            priority,
            message,
            dateFound,
            taskName,
            targets,
            postedBy,
            description
        } = notice
        return (
            <div>
                {priority && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Priority </Typography>
                        <Typography className={classes.info}>{priority}</Typography>
                    </div>
                )}
                {taskName && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Task: </Typography>
                        <Typography className={classes.info}>{taskName}</Typography>
                    </div>
                )}
                {message && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Details: </Typography>
                        <Typography className={classes.info}>{message}</Typography>
                    </div>
                )}
                {dateFound && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Date Posted: </Typography>
                        <Typography className={classes.info}>{moment(dateFound).format('hh:mm a MM/DD/YYYY')}</Typography>
                    </div>
                )}
                {targets && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Target Audience: </Typography>
                        <Typography className={classes.info}>{targets}</Typography>
                    </div>
                )}
                {postedBy && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Posted By: </Typography>
                        <Typography className={classes.info}>{postedBy}</Typography>
                    </div>
                )}
                {description && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Task Description: </Typography>
                        <Typography className={classes.info}>{description}</Typography>
                    </div>
                )}
            </div>
        )
    }

    render() {
        const { onClose, classes, notice, type } = this.props;
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
                        {type === 'hazard' && this.renderHazard()}
                        {type === 'alert' && this.renderAlert()}
                        {type === 'task' && this.renderTask()}
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

NoticesList.propTypes = {
    notice: PropTypes.object.isRequired,
}

NoticesList.defaultProps = {
}


export default withStyles(styles)(NoticesList);
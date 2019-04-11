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
import ReportItem from './ReportItem';
import moment from 'moment'

class ReportsList extends React.Component {

    getTitle = () => {
        const { type } = this.props
        let title = 'Report Details'
        if (type === 'SAR') {
            title = 'Sick Animal Report Details'
        } else if (type === 'DAR') {
            title = 'Dead Animal Report Details'
        } else if (type === 'SAR') {
            title = 'Overcrowded Cage Report Details'
        }
        return title;
    }

    renderSAR = () => {
        let { report, classes } = this.props;
        const {
            vetCardNum,
            protocol,
            species,
            reportedBy,
            numSick,
            numInCage,
            observations,
            description,
            placement,
            dateFound
        } = report
        return (
            <div>
                {vetCardNum && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Vet Card #: </Typography>
                        <Typography className={classes.info}>{vetCardNum}</Typography>
                    </div>
                )}
                {protocol && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Protocol: </Typography>
                        <Typography className={classes.info}>{protocol}</Typography>
                    </div>
                )}
                {dateFound && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Date Found: </Typography>
                        <Typography className={classes.info}>{moment(dateFound).format('hh:mm a MM/DD/YYYY')}</Typography>
                    </div>
                )}
                {species && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Species: </Typography>
                        <Typography className={classes.info}>{species}</Typography>
                    </div>
                )}
                {reportedBy && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Reported By: </Typography>
                        <Typography className={classes.info}>{reportedBy}</Typography>
                    </div>
                )}
                {numSick && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Number Sick: </Typography>
                        <Typography className={classes.info}>{numSick}</Typography>
                    </div>
                )}
                {numInCage && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Number In Cage: </Typography>
                        <Typography className={classes.info}>{numInCage}</Typography>
                    </div>
                )}
                {observations && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Observations: </Typography>
                        <Typography className={classes.info}>{observations}</Typography>
                    </div>
                )}
                {description && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Description: </Typography>
                        <Typography className={classes.info}>{description}</Typography>
                    </div>
                )}
                {placement && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Placement: </Typography>
                        <Typography className={classes.info}>{placement}</Typography>
                    </div>
                )}
            </div>
        )
    }

    renderDAR = () => {
        let { report, classes } = this.props;
        const {
            age,
            protocol,
            species,
            reportedBy,
            numDead,
            numInCage,
            comments,
            placement,
            dateFound
        } = report
        return (
            <div>
                {age && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Age: </Typography>
                        <Typography className={classes.info}>{age}</Typography>
                    </div>
                )}
                {protocol && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Protocol: </Typography>
                        <Typography className={classes.info}>{protocol}</Typography>
                    </div>
                )}
                {dateFound && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Date Found: </Typography>
                        <Typography className={classes.info}>{moment(dateFound).format('hh:mm a MM/DD/YYYY')}</Typography>
                    </div>
                )}
                {species && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Species: </Typography>
                        <Typography className={classes.info}>{species}</Typography>
                    </div>
                )}
                {reportedBy && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Reported By: </Typography>
                        <Typography className={classes.info}>{reportedBy}</Typography>
                    </div>
                )}
                {numDead && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Number Dead: </Typography>
                        <Typography className={classes.info}>{numDead}</Typography>
                    </div>
                )}
                {numInCage && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Number In Cage: </Typography>
                        <Typography className={classes.info}>{numInCage}</Typography>
                    </div>
                )}
                {comments && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Comments: </Typography>
                        <Typography className={classes.info}>{comments}</Typography>
                    </div>
                )}
                {placement && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Placement: </Typography>
                        <Typography className={classes.info}>{placement}</Typography>
                    </div>
                )}
            </div>
        )
    }

    renderOCR = () => {
        let { report, classes } = this.props;
        const {
            protocol,
            reportedBy,
            deadline,
            reason,
            comments,
            placement,
            dateFound
        } = report
        return (
            <div>
                {protocol && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Protocol: </Typography>
                        <Typography className={classes.info}>{protocol}</Typography>
                    </div>
                )}
                {reportedBy && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Reported By: </Typography>
                        <Typography className={classes.info}>{reportedBy}</Typography>
                    </div>
                )}
                {dateFound && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Date Found: </Typography>
                        <Typography className={classes.info}>{moment(dateFound).format('hh:mm a MM/DD/YYYY')}</Typography>
                    </div>
                )}
                {deadline && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Separation Deadline: </Typography>
                        <Typography className={classes.info}>{moment(deadline).format('hh:mm a MM/DD/YYYY')}</Typography>
                    </div>
                )}
                {reason && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Reason: </Typography>
                        <Typography className={classes.info}>{reason}</Typography>
                    </div>
                )}
                {comments && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Comments: </Typography>
                        <Typography className={classes.info}>{comments}</Typography>
                    </div>
                )}
                {placement && (
                    <div className={classes.line}>
                        <Typography className={classes.label}>Placement: </Typography>
                        <Typography className={classes.info}>{placement}</Typography>
                    </div>
                )}
            </div>
        )
    }

    render() {
        const { onClose, classes, report, type } = this.props;
        console.log('report: ', report)
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
                        {type === 'SAR' && this.renderSAR()}
                        {type === 'DAR' && this.renderDAR()}
                        {type === 'OCR' && this.renderOCR()}
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

ReportsList.propTypes = {
    report: PropTypes.object.isRequired,
}

ReportsList.defaultProps = {
}


export default withStyles(styles)(ReportsList);
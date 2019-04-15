import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { DialogTitle, List, ListItem, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ReportItem from './ReportItem';
import moment from 'moment'

class ReportsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openReport: null,
            type: null
        }
    }

    handleOpen = (openReport, type) => () => {
        this.setState({ openReport, type });
    }

    handleClose = () => {
        this.setState({ openReport: null });
    }

    render() {
        const { onClose, classes, SARs, DARs, OCRs, } = this.props;
        const { openReport, type } = this.state;
        return (
            <div>
                {openReport && <ReportItem report={openReport} type={type} onClose={this.handleClose} />}
                <Dialog
                    open={true}
                    onClose={onClose}
                    aria-labelledby="form-dialog-title"
                    maxWidth="sm"
                    className={classes.root}
                >

                    <DialogTitle id="form-dialog-title" className={classes.title}>Open Reports</DialogTitle>
                    <DialogContent>
                        <List>
                            {SARs.map(x => <ListItem button onClick={this.handleOpen(x, 'SAR')} ><Typography><em className={classes.heading}>Sick: </em>{x.protocol} - {moment(x.dateFound).format('hh:mm a MM/DD/YYYY')}</Typography></ListItem>)}
                            {DARs.map(x => <ListItem button onClick={this.handleOpen(x, 'DAR')} ><Typography><em className={classes.heading}>Dead: </em>{x.protocol} - {moment(x.dateFound).format('hh:mm a MM/DD/YYYY')}</Typography></ListItem>)}
                            {OCRs.map(x => <ListItem button onClick={this.handleOpen(x, 'OCR')} ><Typography><em className={classes.heading}>Overcrowded: </em>{x.protocol} - {moment(x.dateFound).format('hh:mm a MM/DD/YYYY')}</Typography></ListItem>)}
                        </List>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                            Cancel
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const styles = {
    title: {
        textAlign: 'center',

    },
    heading: {
        fontSize: 16
    }
}

ReportsList.propTypes = {
    SARs: PropTypes.array,
    DARs: PropTypes.array,
    OCRs: PropTypes.array,
}

ReportsList.defaultProps = {
    SARs: [],
    DARs: [],
    OCRs: [],
}


export default withStyles(styles)(ReportsList);
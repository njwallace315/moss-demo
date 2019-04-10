import React from 'react';
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

    render() {
        const { onClose, classes, SARs, DARs, OCRs } = this.props;
        return (
            <Dialog
                open={true}
                onClose={onClose}
                aria-labelledby="form-dialog-title"
                maxWidth="sm"
                className={classes.root}
            >

                <DialogTitle id="form-dialog-title" >Open Reports</DialogTitle>
                <DialogContent>
                    {SARs.length > 0 && <Typography variant="subheading">Sick Animal Reports</Typography>}
                    <List>
                        {SARs.map(x => <ListItem button>{x.protocol}: {moment(x.dateFound).format('hh:mm a MM/DD/YYYY')}</ListItem>)}
                    </List>


                    {/* {DARs.length > 0 && <h3>Dead Animal Reports</h3>}
                    {DARs.map(x => <ReportItem type={'DAR'} report={x} />)}

                    {SARs.length > 0 && <h3>Overcrowded Cage Reports</h3>}
                    {OCRs.map(x => <ReportItem type={'OCR'} report={x} />)} */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

const styles = {
    title: {
        width: 600,
        textAlign: 'center'
    },
    heading: {
        textAlign: 'center',
        margin: '20px 0px'
    }
}

export default withStyles(styles)(ReportsList);
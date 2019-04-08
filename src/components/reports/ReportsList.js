import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

class ReportsList extends React.Component {

    render() {
        const { onClose, open, classes, SARs, DARs, OCRs } = this.props;
        return (
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="form-dialog-title"
                maxWidth="sm"
                className={classes.root}
            >

                <DialogTitle id="form-dialog-title" >Open Reports</DialogTitle>
                <DialogContent>

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
}

export default withStyles(styles)(ReportsList);
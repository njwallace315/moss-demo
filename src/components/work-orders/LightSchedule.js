import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

class LightSchedule extends React.Component {
    state = {
        start: '',
        end: ''
    };

    handleChange = name => event => {
        // the value returned by the event is a string in military time
        // even though it is displayed as mod(12) (am/pm)
        this.setState({ [name]: event.target.value });
    }

    handleSubmit = () => {
        const { start, end } = this.state
        const { onSubmit } = this.props;
        onSubmit({ start, end })
    }

    render() {
        const { onClose, classes } = this.props;
        return (
            <Dialog
                open
                onClose={onClose}
                aria-labelledby="form-dialog-title"
                maxWidth="sm"
                className={classes.root}
            >
                <DialogTitle id="form-dialog-title">New Light Schedule</DialogTitle>
                <DialogContent>

                    <form className={classes.container} noValidate>
                        <TextField
                            id="start"
                            label="Turn lights on at"
                            type="time"
                            defaultValue="07:30"
                            onChange={this.handleChange('start')}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                        <TextField
                            id="end"
                            label="Turn lights off at"
                            type="time"
                            defaultValue="21:30"
                            onChange={this.handleChange('end')}
                            className={classes.textField}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={this.handleSubmit} color="primary">
                        Submit
          </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

const styles = theme => ({
    title: {
        width: 600,
        textAlign: 'center'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
})

export default withStyles(styles)(LightSchedule);
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';

class LightSchedule extends React.Component {
  state = {
    start: '07:30',
    end: '21:30'
  };

  handleChange = name => event => {
    // the value returned by the event is a string in military time
    // even though it is displayed as mod(12) (am/pm)
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = () => {
    const { start, end } = this.state;
    const { onSubmit } = this.props;
    onSubmit({ start, end, type: 'lightSchedule', title: 'Update Light Schedule' });
  }

  render() {
    const { onClose, classes } = this.props;
    const { start, end } = this.state;
    return (
      <Dialog
        open
        onClose={onClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        className={classes.root}
      >
        <DialogTitle className={classes.title}>New Light Schedule</DialogTitle>
        <DialogContent>
          <Grid container spacing={16}>
            <Grid item xs={6}>
              <TextField
                id="start"
                label="Turn lights on at"
                type="time"
                variant="outlined"
                value={start}
                onChange={this.handleChange('start')}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="end"
                label="Turn lights off at"
                type="time"
                variant="outlined"
                value={end}
                onChange={this.handleChange('end')}
                className={classes.textField}
              />
            </Grid>
          </Grid>
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
    width: 400,
    textAlign: 'center'
  },
  textField: {
    width: '100%',
    marginTop: 15
  },
})

export default withStyles(styles)(LightSchedule);
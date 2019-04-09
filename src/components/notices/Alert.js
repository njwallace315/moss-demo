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

class Alert extends React.Component {
  state = {
    priority: 'Double Litter',
    postedBy: 'Nate',
    subject: 'test',
    message: 'test',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = () => {
    const {
      priority,
      postedBy,
      subject,
      message,
      targets,
    } = this.state
    const { onSubmit } = this.props;
    onSubmit({
      priority,
      postedBy,
      subject,
      message,
      targets,
      dateFound: new Date(),
    })
  }

  render() {
    const {
      priority,
      postedBy,
      subject,
      message,
      targets,
    } = this.state
    const { onClose, classes } = this.props;
    return (
      <Dialog
        open
        onClose={onClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        className={classes.root}
      >
        <DialogTitle id="form-dialog-title">New Alert</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={6}>
              <InputLabel>Posted By</InputLabel>
              <TextField
                className={classes.field}
                margin="dense"
                id="postedBy"
                value={postedBy}
                style={{ margin: '18px 10px 0px 0px' }}
                onChange={this.handleChange('postedBy')}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Priority</InputLabel>
              <Select
                value={priority}
                className={classes.field}
                onChange={this.handleChange('priority')}
                inputProps={{
                  name: 'priority',
                  id: 'priority',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {['High', 'Moderate', 'Low'].map(x => <MenuItem value={x}>{x}</MenuItem>)}
              </Select>
            </Grid>

            <Grid item xs={12}>
              <InputLabel>Alert Subject</InputLabel>
              <TextField
                className={classes.fullWidth}
                margin="dense"
                id="subject"
                value={subject}
                onChange={this.handleChange('subject')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.fullWidth}
                multiline
                rows={2}
                variant="outlined"
                margin="dense"
                id="targets"
                label="Target Audience"
                placeholder="ARTs, facility staff, researchers..."
                value={targets}
                onChange={this.handleChange('targets')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.fullWidth}
                multiline
                rows={3}
                margin="dense"
                id="message"
                label="Message"
                variant="outlined"
                value={message}
                onChange={this.handleChange('message')}
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

const styles = {
  title: {
    width: 600,
    textAlign: 'center'
  },
  field: {
    width: '90%',
    margin: '10px 10px 10px 0px',
    padding: 5
  },
  fullWidth: {
    width: '100%'
  }
}

export default withStyles(styles)(Alert);
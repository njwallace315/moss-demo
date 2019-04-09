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

class Task extends React.Component {
  state = {
    priority: 'Double Litter',
    postedBy: 'Nate',
    taskName: 'test',
    description: 'test',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = () => {
    const {
      priority,
      postedBy,
      taskName,
      description,
      targets,
    } = this.state
    const { onSubmit } = this.props;
    onSubmit({
      priority,
      postedBy,
      taskName,
      description,
      targets,
      dateFound: new Date(),
    })
  }

  render() {
    const {
      priority,
      postedBy,
      taskName,
      description,
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
        <DialogTitle id="form-dialog-title">New Task</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={6}>
              <InputLabel>Assigned By</InputLabel>
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
              <InputLabel>Task Name</InputLabel>
              <TextField
                className={classes.fullWidth}
                margin="dense"
                id="taskName"
                value={taskName}
                onChange={this.handleChange('taskName')}
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
                label="Assigned To"
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
                id="description"
                label="Additional Description"
                variant="outlined"
                value={description}
                onChange={this.handleChange('description')}
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

export default withStyles(styles)(Task);
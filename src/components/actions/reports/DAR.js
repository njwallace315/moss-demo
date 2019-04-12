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
import OutlinedInput from '@material-ui/core/OutlinedInput';

class DAR extends React.Component {
  state = {
    age: 'Pup',
    protocol: 'M005160',
    species: 'Mouse',
    reportedBy: 'Nate',
    placement: 'test',
    numDead: '1',
    numInCage: '5',
    comments: 'test',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = () => {
    const {
      age,
      protocol,
      species,
      reportedBy,
      placement,
      numDead,
      numInCage,
      comments,
    } = this.state
    const { onSubmit } = this.props;
    onSubmit({
      age,
      protocol,
      species,
      reportedBy,
      placement,
      numDead,
      numInCage,
      comments,
      dateFound: new Date()
    })
  }

  render() {
    const {
      age,
      protocol,
      species,
      reportedBy,
      placement,
      numDead,
      numInCage,
      comments,
    } = this.state
    const { onClose, open, classes } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        className={classes.root}
      >
        <DialogTitle id="form-dialog-title">New Dead Animal Report</DialogTitle>
        <DialogContent>
          <Grid container spacing={16}>
            <Grid item xs={6}>
              <InputLabel>Species</InputLabel>
              <Select
                value={species}
                className={classes.select}
                onChange={this.handleChange('species')}
                input={
                  <OutlinedInput labelWidth={0} />
                }
                inputProps={{
                  name: 'species',
                  id: 'species',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {['Mouse', 'Rat', 'Hamster', 'Guinea Pig'].map(x => <MenuItem value={x}>{x}</MenuItem>)}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Age</InputLabel>
              <Select
                value={age}
                className={classes.select}
                onChange={this.handleChange('age')}
                input={
                  <OutlinedInput labelWidth={0} />
                }
                inputProps={{
                  name: 'age',
                  id: 'age',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {['Adult', 'Adult in Breeding', 'Pup'].map(x => <MenuItem value={x}>{x}</MenuItem>)}
              </Select>
            </Grid>

            <Grid item xs={6}>
              <InputLabel>Reported By</InputLabel>
              <TextField
                className={classes.field}
                variant="outlined"
                margin="dense"
                id="reportedBy"
                value={reportedBy}
                onChange={this.handleChange('reportedBy')}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Protocol Number</InputLabel>
              <TextField
                className={classes.field}
                margin="dense"
                variant="outlined"
                id="protocol"
                value={protocol}
                onChange={this.handleChange('protocol')}
              />
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Number Dead</InputLabel>
              <TextField
                className={classes.field}
                margin="dense"
                variant="outlined"
                id="numDead"
                value={numDead}
                onChange={this.handleChange('numDead')}
              />
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Number in Cage</InputLabel>
              <TextField
                className={classes.field}
                margin="dense"
                id="numInCage"
                variant="outlined"
                value={numInCage}
                onChange={this.handleChange('numInCage')}
              />
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Placement</InputLabel>
              <TextField
                className={classes.field}
                margin="dense"
                id="placement"
                variant="outlined"
                value={placement}
                onChange={this.handleChange('placement')}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Additional Comments</InputLabel>
              <TextField
                className={classes.field}
                multiline
                rows={3}
                margin="dense"
                id="comments"
                variant="outlined"
                value={comments}
                onChange={this.handleChange('comments')}
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
    width: '100%',
  },
  select: {
    width: '100%',
    marginTop: 7
  }
}

export default withStyles(styles)(DAR);
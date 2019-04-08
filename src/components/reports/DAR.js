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

class DAR extends React.Component {
  state = {
    age: 'Pup',
    protocol: '1',
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

        <DialogTitle id="form-dialog-title" >New Dead Animal Report</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={6}>
              <InputLabel>Species</InputLabel>
              <Select
                value={species}
                className={classes.field}
                onChange={this.handleChange('species')}
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
                className={classes.field}
                onChange={this.handleChange('age')}
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
              <TextField
                className={classes.field}
                margin="dense"
                id="reportedBy"
                label="Reported By"
                value={reportedBy}
                onChange={this.handleChange('reportedBy')}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.field}
                margin="dense"
                id="protocol"
                label="Protocol Number"
                value={protocol}
                onChange={this.handleChange('protocol')}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className={classes.field}
                margin="dense"
                id="numDead"
                label="Number Dead"
                value={numDead}
                onChange={this.handleChange('numDead')}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className={classes.field}
                margin="dense"
                id="numInCage"
                label="Number in Cage"
                value={numInCage}
                onChange={this.handleChange('numInCage')}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className={classes.field}
                margin="dense"
                id="placement"
                label="Placement"
                value={placement}
                onChange={this.handleChange('placement')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.fieldOutlined}
                multiline
                rows={3}
                margin="dense"
                id="comments"
                label="Additional Comments"
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
    width: '90%',
    margin: '10px 10px 10px 0px',
    padding: 5
  },
  fieldOutlined: {
    width: '100%'
  }
}

export default withStyles(styles)(DAR);
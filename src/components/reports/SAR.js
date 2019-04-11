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
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel';

class SAR extends React.Component {
  state = {
    vetCardNum: '12345',
    protocol: 'M005160',
    species: 'Mouse',
    reportedBy: 'Nate',
    placement: 'Rack 2, col C, row 8',
    numSick: '2',
    numInCage: '5',
    observations: 'Hunched Posture',
    description: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = () => {
    const {
      vetCardNum,
      protocol,
      species,
      reportedBy,
      placement,
      numSick,
      numInCage,
      observations,
      description,
    } = this.state
    const { onSubmit } = this.props;
    onSubmit({
      vetCardNum,
      protocol,
      species,
      reportedBy,
      placement,
      numSick,
      numInCage,
      observations,
      description,
      dateFound: new Date()
    })
  }

  render() {
    const {
      vetCardNum,
      protocol,
      species,
      reportedBy,
      placement,
      numSick,
      numInCage,
      observations,
      description,
    } = this.state
    const { onClose, open, classes } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
        // fullScreen
        className={classes.root}
      >

        <DialogTitle id="form-dialog-title" >New Sick Animal Report</DialogTitle>
        <DialogContent>
          <Grid container spacing={16}>
            <Grid item xs={6}>
              <InputLabel>Species</InputLabel>
              <Select
                variant="outlined"
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
              <InputLabel>Observations</InputLabel>
              <Select
                variant="outlined"
                value={observations}
                className={classes.select}
                onChange={this.handleChange('observations')}
                input={
                  <OutlinedInput labelWidth={0} />
                }
                inputProps={{
                  name: 'observations',
                  id: 'observations',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {[
                  'Moribund',
                  'Difficulty Breathing',
                  'Dystocia',
                  'Fighting',
                  'Hunched Posture',
                  'Wound',
                  'Abnormal Appearance',
                  'Malocclusion',
                  'Paralysis',
                  'Stained Fur',
                  'Prolapse',
                  'Lethargic',
                  'Rough Haircoat',
                  'Thin',
                  'Tumor/Mass'
                ].map(x => <MenuItem value={x}>{x}</MenuItem>)}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Vet Card #</InputLabel>
              <TextField
                variant="outlined"
                className={classes.field}
                margin="dense"
                id="vetCardNum"
                value={vetCardNum}
                onChange={this.handleChange('vetCardNum')}
              />
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Number Sick</InputLabel>
              <TextField
                variant="outlined"
                className={classes.field}
                margin="dense"
                id="numSick"
                value={numSick}
                onChange={this.handleChange('numSick')}
              />
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Number in Cage</InputLabel>
              <TextField
                variant="outlined"
                className={classes.field}
                margin="dense"
                id="numInCage"
                value={numInCage}
                onChange={this.handleChange('numInCage')}
              />
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Protocol Number</InputLabel>
              <TextField
                variant="outlined"
                className={classes.field}
                margin="dense"
                id="protocol"
                value={protocol}
                onChange={this.handleChange('protocol')}
              />
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Reported By</InputLabel>
              <TextField
                variant="outlined"
                className={classes.field}
                margin="dense"
                id="reportedBy"
                value={reportedBy}
                onChange={this.handleChange('reportedBy')}
              />
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Placement</InputLabel>
              <TextField
                variant="outlined"
                className={classes.field}
                margin="dense"
                id="placement"
                value={placement}
                onChange={this.handleChange('placement')}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Additional Description</InputLabel>
              <TextField
                className={classes.field}
                multiline
                rows={3}
                margin="dense"
                id="description"
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
    width: '100%',
  },
  select: {
    width: '100%',
    marginTop: 7
  }
}

export default withStyles(styles)(SAR);
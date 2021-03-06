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
import OutlinedInput from '@material-ui/core/OutlinedInput'

class Hazard extends React.Component {
  state = {
    protocol: 'M005160',
    type: 'Chemical',
    postedBy: 'Demo Researcher',
    agent: 'Diethyl Ether',
    ppe: 'Gloves, saftey glasses.',
    msds: '60-29-7',
    effects: 'Extremely flammable. High volitility and density can cause flash fires with ignition sources below workstation. Harmful if inhaled. Skin and eye irritant.',
    practices: 'Only to be used in fume hood. Cap when not in use.'
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = () => {
    const {
      protocol,
      type,
      postedBy,
      agent,
      ppe,
      effects,
      practices,
      msds
    } = this.state
    const { onSubmit } = this.props;
    const hazard = {
      protocol,
      type,
      postedBy,
      agent,
      ppe,
      effects,
      practices,
      datePosted: new Date(),
    }
    if (type === 'Chemical') hazard.msds = msds;
    onSubmit(hazard)
  }

  render() {
    const {
      protocol,
      type,
      postedBy,
      agent,
      ppe,
      effects,
      practices,
      msds
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
        <DialogTitle id="form-dialog-title" >New Hazard</DialogTitle>
        <DialogContent>
          <Grid container spacing={16}>
            <Grid item xs={6}>
              <InputLabel>Posted By</InputLabel>
              <TextField
                className={classes.field}
                margin="dense"
                id="postedBy"
                variant="outlined"
                value={postedBy}
                onChange={this.handleChange('postedBy')}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Protocol Number</InputLabel>
              <TextField
                className={classes.field}
                margin="dense"
                id="protocol"
                variant="outlined"
                value={protocol}
                onChange={this.handleChange('protocol')}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Type of Hazardous Material</InputLabel>
              <Select
                value={type}
                className={classes.select}
                onChange={this.handleChange('type')}
                input={
                  <OutlinedInput labelWidth={0} />
                }
                inputProps={{
                  name: 'type',
                  id: 'type',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {['Biological', 'Chemical', 'Radioactive'].map(x => <MenuItem value={x}>{x}</MenuItem>)}
              </Select>
            </Grid>

            <Grid item xs={6}>
              <InputLabel>Hazardous Agent</InputLabel>
              <TextField
                className={classes.field}
                margin="dense"
                id="agent"
                variant="outlined"
                value={agent}
                onChange={this.handleChange('agent')}
              />
            </Grid>
            {type === 'Chemical' &&
              (<Grid item xs={6}>
                <TextField
                  className={classes.field}
                  margin="dense"
                  variant="outlined"
                  id="msds"
                  label="MSDS/CAS Identifier"
                  value={msds}
                  onChange={this.handleChange('msds')}
                />
              </Grid>)}

            <Grid item xs={12}>
              <TextField
                className={classes.field}
                multiline
                rows={3}
                variant="outlined"
                margin="dense"
                id="effects"
                label="Adverse Effects"
                value={effects}
                onChange={this.handleChange('effects')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.field}
                multiline
                rows={3}
                variant="outlined"
                margin="dense"
                id="practices"
                label="Special Practices"
                value={practices}
                onChange={this.handleChange('practices')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.field}
                multiline
                rows={3}
                margin="dense"
                id="ppe"
                label="PPE Requirements"
                variant="outlined"
                value={ppe}
                onChange={this.handleChange('ppe')}
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

export default withStyles(styles)(Hazard);
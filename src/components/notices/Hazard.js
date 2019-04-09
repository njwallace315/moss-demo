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

class Hazard extends React.Component {
  state = {
    protocol: '1',
    type: 'Double Litter',
    postedBy: 'Nate',
    agent: 'test',
    ppe: 'test',
    msds: ''
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
          <Grid container>
            <Grid item xs={6}>
              <InputLabel>Posted By</InputLabel>
              <TextField
                className={classes.field}
                margin="dense"
                id="postedBy"
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
                value={protocol}
                onChange={this.handleChange('protocol')}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Type of Hazardous Material</InputLabel>
              <Select
                value={type}
                className={classes.field}
                onChange={this.handleChange('type')}
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
                value={agent}
                style={{ marginBottom: 0, marginTop: 20 }}
                onChange={this.handleChange('agent')}
              />
            </Grid>
            {type === 'Chemical' &&
              (<Grid item xs={6}>
                <TextField
                  className={classes.field}
                  margin="dense"
                  id="msds"
                  label="MSDS Number"
                  value={msds}
                  onChange={this.handleChange('msds')}
                />
              </Grid>)}

            <Grid item xs={12}>
              <TextField
                className={classes.fieldOutlined}
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
                className={classes.fieldOutlined}
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
                className={classes.fieldOutlined}
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
    width: '90%',
    margin: '10px 10px 10px 0px',
    padding: 5
  },
  fieldOutlined: {
    width: '100%'
  }
}

export default withStyles(styles)(Hazard);
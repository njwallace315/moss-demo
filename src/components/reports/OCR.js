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
import moment from 'moment';

class OCR extends React.Component {
  state = {
    protocol: '1',
    reason: 'Double Litter',
    reportedBy: 'Nate',
    placement: 'test',
    comments: 'test',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = () => {
    const {
      protocol,
      reason,
      reportedBy,
      placement,
      comments,
    } = this.state
    const { onSubmit } = this.props;
    onSubmit({
      protocol,
      reason,
      reportedBy,
      placement,
      comments,
      dateFound: new Date(),
      deadline: reason === 'Double Litter' ?
        moment().add(1, 'h').toDate()
        :
        moment().add(1, 'd').toDate()
    })
  }

  render() {
    const {
      protocol,
      reason,
      reportedBy,
      placement,
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

        <DialogTitle id="form-dialog-title" >New Overcrowded Cage Report</DialogTitle>
        <DialogContent>
          <Grid container spacing={16}>
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
                variant="outlined"
                margin="dense"
                id="protocol"
                value={protocol}
                onChange={this.handleChange('protocol')}
              />
            </Grid>
            <Grid item xs={6}>
              <InputLabel>Reason</InputLabel>
              <Select
                value={reason}
                className={classes.select}
                onChange={this.handleChange('reason')}
                input={
                  <OutlinedInput labelWidth={0} />
                }
                inputProps={{
                  name: 'reason',
                  id: 'reason',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {['Double Litter', 'More Adults than Allowed', 'Litter not Weaned', '3+ Adults and a Litter'].map(x => <MenuItem value={x}>{x}</MenuItem>)}
              </Select>
            </Grid>

            <Grid item xs={6}>
              <InputLabel>Placement</InputLabel>
              <TextField
                className={classes.field}
                margin="dense"
                variant="outlined"
                id="placement"
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

export default withStyles(styles)(OCR);
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
          <Grid container>
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
            <Grid item xs={6}>
              <InputLabel>Reason</InputLabel>
              <Select
                value={reason}
                className={classes.field}
                onChange={this.handleChange('reason')}
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
              <TextField
                className={classes.field}
                margin="dense"
                id="placement"
                label="Placement"
                value={placement}
                style={{ marginBottom: 0, marginTop: 20 }}
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

export default withStyles(styles)(OCR);
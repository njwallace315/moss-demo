import React from 'react';
import PropTypes from 'prop-types'
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  InputLabel,
  Select,
  Grid,
  OutlinedInput
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class Maintenance extends React.Component {
  state = {
    title: 'Filter Chance',
    request: 'Replace the HEPPA filter in this BSC',
    itemKey: '',
    dueDate: "2019-08-24"
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = () => {
    const { request, title, itemKey, dueDate } = this.state
    const { onSubmit } = this.props;
    const order = { request, type: 'maintenance', title, dateRequested: new Date(), dueDate };
    if (itemKey) {
      order.itemKey = itemKey
    }
    onSubmit(order)
  }

  render() {
    const { onClose, classes, inventory } = this.props;
    const { itemKey, request, title, dueDate } = this.state;
    const keys = Object.keys(inventory);
    return (
      <Dialog
        open
        onClose={onClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        className={classes.root}
      >
        <DialogTitle id="form-dialog-title">New Maintenance Request</DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                id="title"
                value={title}
                variant="outlined"
                label="Order Title"
                onChange={this.handleChange('title')}
                className={classes.field}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="request"
                value={request}
                multiline
                rows={5}
                variant="outlined"
                label="Order Details"
                onChange={this.handleChange('request')}
                className={classes.field}
              />
            </Grid>
            <Grid item xs={6} className={classes.bumpDown}>
              <InputLabel >Due Date</InputLabel>
              <TextField
                id="date"
                type="date"
                value={dueDate}
                variant="outlined"
                onChange={this.handleChange('dueDate')}
                className={classes.fieldSmall}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6} className={classes.selectContainer}>
              <InputLabel >Applicable Inventory Item</InputLabel>
              <Select
                value={itemKey}
                className={classes.fieldSmall}
                input={
                  <OutlinedInput />
                }
                onChange={this.handleChange('itemKey')}
                inputProps={{
                  name: 'itemKey',
                  id: 'itemKey',
                }}
              >
                <MenuItem value="">
                  <em></em>
                </MenuItem>
                {keys.map(key => <MenuItem value={key}>{inventory[key].name}</MenuItem>)}
              </Select>
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
  field: {
    width: '100%',
    marginTop: 25,
  },
  fieldSmall: {
    width: '95%',
  },
  selectContainer: {
    marginTop: 25,
  },
  bumpDown: {
    marginTop: 25
  }

})

Maintenance.propTypes = {
  inventory: PropTypes.object.isRequired,
}

Maintenance.defaultProps = {
  inventory: {}
}

export default withStyles(styles)(Maintenance);
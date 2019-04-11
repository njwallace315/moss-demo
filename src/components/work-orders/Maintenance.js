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
import uniqid from 'uniqid';
import { withStyles } from '@material-ui/core/styles';

class Maintenance extends React.Component {
  state = {
    title: 'Replace HEPA Filter',
    request: 'Replace the HEPA filter in B1451 BSC',
    itemId: '',
    dueDate: "2019-08-24"
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = () => {
    const { request, title, itemId, dueDate } = this.state
    const { onSubmit, inventory } = this.props;
    const order = { request, type: 'maintenance', title, dateRequested: new Date(), dueDate, _id: uniqid() };
    if (itemId) {
      order.itemId = itemId
      order.itemName = inventory.filter(x => x._id === itemId)[0].name
    }
    onSubmit(order)
  }

  render() {
    const { onClose, classes, inventory } = this.props;
    const { itemId, request, title, dueDate } = this.state;
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
                value={itemId}
                className={classes.fieldSmall}
                input={
                  <OutlinedInput labelWidth={0} />
                }
                onChange={this.handleChange('itemId')}
                inputProps={{
                  name: 'itemId',
                  id: 'itemId',
                }}
              >
                <MenuItem value="">
                  <em></em>
                </MenuItem>
                {inventory.filter(x => x.type === 'item').map(x => <MenuItem value={x._id}>{x.name}</MenuItem>)}
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
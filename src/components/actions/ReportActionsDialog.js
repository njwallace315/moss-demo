import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  List,
  ListItem,
  DialogTitle,
  ListItemText
} from '@material-ui/core';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const ReportActionsDialog = ({ onClose, handleOpen }) => {
  return (
    <div>
      <Dialog
        open
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Select a Report Type</DialogTitle>
        <DialogContent>

          <List component="nav">
            <ListItem button onClick={handleOpen('SAROpen')}>
              <ListItemText primary="Sick Animal Report" />
            </ListItem>
            <ListItem button onClick={handleOpen('DAROpen')}>
              <ListItemText primary="Dead Animal Report" />
            </ListItem>
            <ListItem button onClick={handleOpen('OCROpen')}>
              <ListItemText primary="Overcrowded Cage Report" />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

ReportActionsDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
}

export default ReportActionsDialog;


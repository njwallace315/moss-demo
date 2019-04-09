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

const NoticeActionsDialog = ({ onClose, handleOpen }) => {
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
        <DialogTitle>Select a Notice Type</DialogTitle>
        <DialogContent>

          <List component="nav">
            <ListItem button onClick={handleOpen('alertOpen')}>
              <ListItemText primary="Alert" />
            </ListItem>
            <ListItem button onClick={handleOpen('hazardOpen')}>
              <ListItemText primary="Hazard" />
            </ListItem>
            <ListItem button onClick={handleOpen('taskOpen')}>
              <ListItemText primary="Task" />
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

NoticeActionsDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
}

export default NoticeActionsDialog;


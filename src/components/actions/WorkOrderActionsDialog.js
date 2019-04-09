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

const WorkOrderActionsDialog = ({ onClose, handleOpen }) => {
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
                        <ListItem button onClick={handleOpen('lightOpen')}>
                            <ListItemText primary="Adjust Light Schedule" />
                        </ListItem>
                        <ListItem button onClick={handleOpen('envSettingsOpen')}>
                            <ListItemText primary="Adjust Environment Settings" />
                        </ListItem>
                        <ListItem button onClick={handleOpen('maintenanceOpen')}>
                            <ListItemText primary="Maintenance Request" />
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

WorkOrderActionsDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
}

export default WorkOrderActionsDialog;


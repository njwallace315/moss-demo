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
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import Announcement from '@material-ui/icons/Announcement';
import Assignment from '@material-ui/icons/Assignment';
import CreditCard from '@material-ui/icons/CreditCard';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ActionsDialog extends React.Component {
    render() {
        const { open = false, onClose, handleOpen } = this.props;
        return (
            <div>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={onClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogContent>
                        <List component="nav">
                            <ListItem button onClick={handleOpen('reportOpen')}>
                                <ListItemIcon>
                                    <Assignment />
                                </ListItemIcon>
                                <ListItemText primary="Report" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <CreditCard />
                                </ListItemIcon>
                                <ListItemText primary="Work Order" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <Announcement />
                                </ListItemIcon>
                                <ListItemText primary="Notice" />
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
}

ActionsDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
}

export default ActionsDialog;
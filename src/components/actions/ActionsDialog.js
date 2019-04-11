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
import { withStyles } from '@material-ui/core/styles'
import Announcement from '@material-ui/icons/Announcement';
import Assignment from '@material-ui/icons/Assignment';
import Build from '@material-ui/icons/Build';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const ActionsDialog = ({ open = false, onClose, handleOpen, classes }) => {
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
                                <Assignment className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText primary="Report" />
                        </ListItem>
                        <ListItem button onClick={handleOpen('workOrderOpen')}>
                            <ListItemIcon>
                                <Build className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText primary="Work Order" />
                        </ListItem>
                        <ListItem button onClick={handleOpen('noticeOpen')}>
                            <ListItemIcon>
                                <Announcement className={classes.icon} />
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

ActionsDialog.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
}
const styles = {
    icon: {
    }
}
export default withStyles(styles)(ActionsDialog);
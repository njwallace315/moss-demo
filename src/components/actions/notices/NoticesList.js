import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { DialogTitle, List, ListItem, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NoticeItem from '../../room/ongoing/NoticeItem';
import moment from 'moment'

class NoticesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openNotice: null,
            type: null
        }
    }

    handleOpen = (openNotice, type) => () => {
        this.setState({ openNotice, type });
    }

    handleClose = () => {
        this.setState({ openNotice: null });
    }

    render() {
        const { onClose, classes, hazards, alerts, tasks, } = this.props;
        const { openNotice, type } = this.state;
        return (
            <div>
                {openNotice && <NoticeItem notice={openNotice} type={type} onClose={this.handleClose} />}
                <Dialog
                    open={true}
                    onClose={onClose}
                    aria-labelledby="form-dialog-title"
                    maxWidth="sm"
                    className={classes.root}
                >

                    <DialogTitle id="form-dialog-title" className={classes.title}>Open Notices</DialogTitle>
                    <DialogContent>
                        <List>
                            {hazards.map(x => <ListItem button onClick={this.handleOpen(x, 'hazard')} ><Typography><em className={classes.heading}>Hazard: </em>{x.agent}</Typography></ListItem>)}
                            {alerts.map(x => <ListItem button onClick={this.handleOpen(x, 'alert')} ><Typography><em className={classes.heading}>Alert: </em>{x.protocol} - {moment(x.dateFound).format('hh:mm a MM/DD/YYYY')}</Typography></ListItem>)}
                            {tasks.map(x => <ListItem button onClick={this.handleOpen(x, 'task')} ><Typography><em className={classes.heading}>Task: </em>{x.protocol} - {moment(x.dateFound).format('hh:mm a MM/DD/YYYY')}</Typography></ListItem>)}
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

const styles = {
    title: {
        textAlign: 'center',

    },
    heading: {
        fontSize: 16
    }
}

NoticesList.propTypes = {
    hazards: PropTypes.array,
    alerts: PropTypes.array,
    tasks: PropTypes.array,
}

NoticesList.defaultProps = {
    hazards: [],
    alerts: [],
    tasks: [],
}


export default withStyles(styles)(NoticesList);
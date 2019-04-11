import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import { DialogTitle, List, ListItem, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import OrderItem from './OrderItem';
import moment from 'moment'

class OrdersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openOrder: null,
        }
    }

    handleOpen = (openOrder) => () => {
        this.setState({ openOrder });
    }

    handleClose = () => {
        this.setState({ openOrder: null });
    }

    render() {
        const { onClose, classes, workOrders } = this.props;
        const { openOrder } = this.state;
        return (
            <div>
                {openOrder && <OrderItem order={openOrder} onClose={this.handleClose} />}
                <Dialog
                    open={true}
                    onClose={onClose}
                    aria-labelledby="form-dialog-title"
                    maxWidth="sm"
                    className={classes.root}
                >

                    <DialogTitle id="form-dialog-title" className={classes.title}>Open Work Orders</DialogTitle>
                    <DialogContent>
                        <List>
                            {workOrders.map(x => <ListItem button onClick={this.handleOpen(x)} ><Typography><em className={classes.heading}>{x.title}</em> - Due: {moment(x.dueDate).format('hh:mm a MM/DD/YYYY')}</Typography></ListItem>)}
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

OrdersList.propTypes = {
    workOrders: PropTypes.array,
}
OrdersList.defaultProps = {
    workOrders: [],
}


export default withStyles(styles)(OrdersList);
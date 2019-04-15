import React from 'react';
import PropTypes from 'prop-types';
import { ClickAwayListener, Dialog, DialogContent, DialogTitle, Divider, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import theme from '../../../theme';
import OrdersContent from '../../content/OrdersContent'

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: false,

        }
    }

    handleOpen = name => () => {
        this.setState({ [name]: true });
    }

    handleClose = name => () => {
        this.setState({ [name]: false });
    }

    getStyle = () => {
        const { item, workOrders } = this.props
        const style = Object.assign({}, item.style);
        if (this.applicableOrders(item, workOrders).length > 0) {
            style.backgroundColor = theme.palette.primary.main
            style.opacity = .5
        } else if (!style.backgroundColor) {
            style.backgroundColor = theme.palette.backgroundAccent.main
        }
        return style
    }

    applicableOrders = () => {
        const { item, workOrders } = this.props
        return workOrders.filter(x => x.itemId === item._id)
    }

    render() {
        const { item, workOrders, classes } = this.props
        const { dialogOpen } = this.state;
        const orders = this.applicableOrders()
        return (
            <div>
                <ClickAwayListener onClickAway={this.handleClose}>
                    <div style={this.getStyle(item, workOrders)} type="button" onClick={this.handleOpen('dialogOpen')} />
                </ClickAwayListener>
                <Dialog open={dialogOpen} onClose={this.handleClose('dialogOpen')}>
                    <DialogTitle>
                        {item.name}
                    </DialogTitle>
                    <DialogContent>
                        {item.description && <Typography><em>{item.description}</em></Typography>}
                        {item.link && <Typography><a href={item.link} rel="noopener noreferrer" target="_blank">Click here to visit product page</a></Typography>}
                        {orders.length > 0 && (
                            <div>
                                <Divider className={classes.divider} />
                                <Typography variant="subheading" className={classes.em}>Open Work Orders</Typography>
                                <OrdersContent orders={orders} />
                                <Divider className={classes.divider} />
                            </div>
                        )}
                        {item.details && item.details.length > 0 && (
                            item.details.map(x => {
                                return (
                                    <div className={classes.line}>
                                        <Typography className={classes.label}>{x.label}: </Typography>
                                        <Typography className={classes.info}>{x.value}</Typography>
                                    </div>
                                )
                            })
                        )}
                    </DialogContent>
                </Dialog>
            </div>

        )
    };
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    workOrders: PropTypes.array
};

Item.defaultProps = {
    workOrders: []
}

const styles = theme => ({
    em: {
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        textAlign: 'center'
    },
    divider: {
        margin: '10px 0px'
    },
    label: {
        display: 'inline',
        fontWeight: 'bold'
    },
    info: {
        display: 'inline',
    },
    line: {
        display: 'block',
        width: '100%',
        margin: 5
    },
})

export default withStyles(styles)(Item);
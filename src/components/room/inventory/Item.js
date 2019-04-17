import React from 'react';
import PropTypes from 'prop-types';
import { ClickAwayListener, Dialog, DialogContent, DialogTitle, Divider, Typography, List, ListItem } from '@material-ui/core'
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
        const { item, workOrders, styleKey } = this.props
        const style = Object.assign({}, item.style[styleKey]);
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

    format = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        const { item, workOrders, classes } = this.props
        const { dialogOpen } = this.state;
        const orders = this.applicableOrders()
        let ph = {
            tcoo: 0,
            materials: [],
            smx: [],
            umx: []
        }

        if (item.purchaseHistory) {
            let materialsCost = 0;
            let smxCost = 0;
            let umxCost = 0;
            item.purchaseHistory.forEach(x => { ph.tcoo += x.value })
            ph.materials = item.purchaseHistory.filter(x => {
                return x.type === 'materials'
            });
            ph.smx = item.purchaseHistory.filter(x => {
                return x.type === 'smx'
            });
            ph.umx = item.purchaseHistory.filter(x => {
                return x.type === 'umx'
            });
            ph.materials.forEach(x => {
                materialsCost += x.value
            });
            ph.smx.forEach(x => {
                smxCost += x.value
            });
            ph.umx.forEach(x => {
                umxCost += x.value;
            });
            ph.materialsCost = materialsCost.toFixed(2);
            ph.smxCost = smxCost.toFixed(2);
            ph.umxCost = umxCost.toFixed(2)
            console.log('ph: ', ph)
        }
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
                            <div>
                                <Typography variant="subheading" className={classes.em}>Details</Typography>
                                {item.details.map(x => {
                                    return (
                                        <div className={classes.line}>
                                            <Typography className={classes.label}>{x.label}: </Typography>
                                            <Typography className={classes.info}>{x.value}</Typography>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                        {item.purchaseHistory && item.purchaseHistory.length > 0 && (
                            <div>
                                <Divider className={classes.divider} />
                                <Typography variant="subheading" className={classes.em}>Purchase History</Typography>
                                <Typography variant="subheading" style={{ fontWeight: 'bold' }}>Total cost of ownership: ${this.format(ph.tcoo)}</Typography>
                                <List>
                                    <ListItem className={classes.listItem}><Typography variant="subheading">Materials: ${this.format(ph.materialsCost)}</Typography></ListItem>
                                    <ListItem className={classes.listItem}><Typography variant="subheading">Scheduled Maintenance: ${this.format(ph.smxCost)}</Typography></ListItem>
                                    <ListItem className={classes.listItem}><Typography variant="subheading">Uncheduled Maintenance: ${this.format(ph.umxCost)}</Typography></ListItem>
                                </List>
                                {/*item.purchaseHistory.map(x => {
                                        console.log('x', x)
                                        return (
                                            <div className={classes.line}>
                                                <Typography className={classes.label}>{x.label}: </Typography>
                                                <Typography className={classes.info}>${x.value}</Typography>
                                            </div>
                                        )
                                    })*/}
                            </div>
                        )}
                        {item.dependencies && item.dependencies.length > 0 && (
                            <div>
                                <Divider className={classes.divider} />
                                <Typography variant="subheading" className={classes.em}>Dependencies</Typography>
                                {item.dependencies.map(x => {
                                    return (
                                        <div className={classes.line}>
                                            <Typography variant="subheading">{x}</Typography>
                                        </div>
                                    )
                                })
                                }
                            </div>
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
        margin: '15px 0px'
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
    listItem: {
        padding: 0
    }
})

export default withStyles(styles)(Item);
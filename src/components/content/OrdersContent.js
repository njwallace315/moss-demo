import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import moment from 'moment'
import OrderItem from '../room/ongoing/OrderItem'


class OrdersContent extends React.Component {
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
        const { classes, orders } = this.props;
        const { openOrder } = this.state;
        return (
            <div>
                {openOrder && <OrderItem order={openOrder} onClose={this.handleClose} />}
                <List className={classes.list}>
                    {orders.map(x => {
                        return (
                            <ListItem button onClick={this.handleOpen(x)} className={classes.listItem}>
                                <Typography className={classes.inlineLabel} variant="subheading">
                                    <em>{x.title}</em>:&nbsp;
                                </Typography>
                                <Typography className={classes.inline}>
                                    Due {moment(x.dueDate).format('MM/DD/YYYY')}
                                </Typography>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        );
    }
};

OrdersContent.propTypes = {
    classes: PropTypes.object.isRequired,
    orders: PropTypes.array,
};

OrdersContent.defaultProps = {
    orders: []
}

const styles = {
    inline: {
        display: 'inline',
        fontSize: '1.1em'
    },
    inlineLabel: {
        display: 'inline',
        fontWeight: 'bold',
        textDecoration: 'italics'
    },
    listItem: {
        padding: '0px 16px'
    },
    list: {
        padding: 0
    }
};

export default withStyles(styles)(OrdersContent);
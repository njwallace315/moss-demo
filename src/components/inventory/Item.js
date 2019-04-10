import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@material-ui/core'
import theme from '../../theme';
import moment from 'moment'


const Item = ({ item, workOrders }) => {
    return (
        <Tooltip title={item.description}>
            <div style={getStyle(item, workOrders)} />
        </Tooltip>
    );
};

const getStyle = (item, workOrders) => {
    const style = Object.assign({}, item.style);
    if (applicableOrders(item, workOrders).length > 0) {
        style.backgroundColor = theme.palette.primary.main
        style.opacity = .5
    } else if (!style.backgroundColor) {
        style.backgroundColor = theme.palette.backgroundAccent.main
    }
    return style
}
const applicableOrders = (item, workOrders) => {
    return workOrders.filter(x => x.itemId === item._id)
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    workOrders: PropTypes.array
};

Item.defaultProps = {
    workOrders: []
}

export default Item;
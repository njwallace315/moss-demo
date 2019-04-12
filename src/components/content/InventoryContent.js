import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Typography, Tooltip, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import _ from 'lodash'

const getList = inventory => {
  const items = getItems(inventory);
  const counts = {};
  const names = _.uniq(items.map(x => x.name))
  items.forEach(x => {
    if (counts[x.name]) {
      counts[x.name] += 1
    } else {
      counts[x.name] = 1
    }
  })
  let str = '';
  for (let i = 0; i < names.length; i++) {
    if (counts[names[i]] > 1) {
      str += names[i] + ' (' + counts[names[i]] + ')'
    } else {
      str += names[i]
    }
    if (i !== names.length - 1) {
      str += ', '
    }
  }
  return str
}

const getItems = inventory => inventory.filter(x => x.type === 'item')

const InventoryContent = ({ classes, inventory = [] }) => {
  const items = getItems(inventory)
  return (
    <div>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <div className={classes.row}>
            <Typography variant="subheading" className={classes.inlineLabel}>
              Inventory:&nbsp;
            </Typography>
            <Typography className={classes.inline}>
              {getList(inventory)}
            </Typography>
          </div>
        </ListItem>
      </List>
    </div>
  );
};

InventoryContent.propTypes = {
  inventory: PropTypes.array,
  handleOpen: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const styles = {
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  inline: {
    display: 'inline',
    fontSize: '1.1em'
  },
  inlineLabel: {
    display: 'inline',
    fontWeight: 'bold'
  },
  timeline: {
    display: 'inline-block',
    float: 'right',
    padding: '0px 5px',
    height: '100%',
    color: '#000'
  },
  row: {
    display: 'block'
  },
  listItem: {
    padding: '0px 16px'
  },
  list: {
    padding: 0
  }
};

export default withStyles(styles)(InventoryContent);
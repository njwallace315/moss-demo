import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Typography, Tooltip, IconButton } from '@material-ui/core'
import { Timeline } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'

const generateTemp = (base) => {
  let temp;
  if (Math.random() >= .5) {
    temp = base + Math.random() * 10
  } else {
    temp = base - Math.random() * 10
  }
  return temp.toFixed(2);
}

const generateHumid = (base) => {
  let humidity;
  if (Math.random() >= .5) {
    humidity = base + Math.random() * 10
  } else {
    humidity = base - Math.random() * 10
  }
  return humidity.toFixed(2);
}

const generateLight = () => {
  const rand = Math.random();
  if (rand >= .66) {
    return 'On'
  } else if (rand >= .33) {
    return 'On-High'
  }
  return 'Off'
}

const getTextStyle = (val, base) => {
  const diff = Math.abs(base - val)
  let color = 'green';
  if (diff >= 7.5) {
    color = 'red'
  } else if (diff >= 5) {
    color = 'orange'
  }
  return { color }
}

const tempBase = 72;
const humidBase = 25;
const EnvContent = (
  {
    classes,
    temperature = generateTemp(tempBase),
    humidity = generateHumid(humidBase),
    light = generateLight(),
    handleOpen
  }) => {
  return (
    <div>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <div className={classes.row}>
            <Typography variant="subheading" className={classes.inlineLabel}>
              Temperature:&nbsp;
            </Typography>
            <Typography style={getTextStyle(temperature, tempBase)} className={classes.inline}>{temperature} F</Typography>
            <Tooltip title="Show Temperature Time Series Data">
              <IconButton className={classes.timeline} onClick={handleOpen('temperatureOpen')}>
                <Timeline />
              </IconButton>
            </Tooltip>
          </div>
        </ListItem>
        <ListItem className={classes.listItem}>
          <div className={classes.row}>
            <Typography variant="subheading" className={classes.inlineLabel}>
              Humidity:&nbsp;
            </Typography>
            <Typography style={getTextStyle(humidity, humidBase)} className={classes.inline}>{humidity} %</Typography>
            <Tooltip title="Show Humidity Time Series Data">
              <IconButton className={classes.timeline} onClick={handleOpen('humidityOpen')}>
                <Timeline />
              </IconButton>
            </Tooltip>
          </div>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Typography variant="subheading" className={classes.inlineLabel}>
            Lights:&nbsp;
          </Typography>
          <Typography className={classes.inline}>{light}</Typography>
        </ListItem>
      </List>
    </div>
  );
};

EnvContent.propTypes = {
  temperature: PropTypes.number,
  humidity: PropTypes.number,
  light: PropTypes.string,
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
  },
  inlineLabel: {
    display: 'inline',
    fontWeight: 'bold'
  },
};

export default withStyles(styles)(EnvContent);
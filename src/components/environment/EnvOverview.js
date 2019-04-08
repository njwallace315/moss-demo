import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, IconButton, Typography, Tooltip } from '@material-ui/core';
import { Timeline } from '@material-ui/icons';

const styles = {
  card: {
    opacity: .75,
    display: 'block',
    width: 300,
    zIndex: 1000,
    position: 'relative'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    paddingBottom: 0
  },
  timeline: {
    float: 'right'
  }
};

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

function EnvOverview(props) {
  const tempBase = 72;
  const humidBase = 25;
  const { classes, temperature = generateTemp(tempBase), humidity = generateHumid(humidBase), light = generateLight() } = props;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Environment Overview
        </Typography>
        <Typography variant="h5" component="h2">
          Temperature: <span style={getTextStyle(temperature, tempBase)}>{temperature} F</span>
        </Typography>
        <Typography variant="h5" component="h2">
          Humidity: <span style={getTextStyle(humidity, humidBase)}>{humidity} %</span>
        </Typography>
        <Typography variant="h5" component="h2">
          Lights: {light}
        </Typography>
        <Tooltip title="Show time series data">
          <IconButton className={classes.timeline}>
            <Timeline />
          </IconButton>
        </Tooltip>
      </CardContent>
    </Card>
  );
}

EnvOverview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnvOverview);
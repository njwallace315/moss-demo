import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, IconButton, Typography, Tooltip } from '@material-ui/core';
import { Timeline } from '@material-ui/icons';

const styles = {
  card: {
    width: 330,
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
  inline: {
    display: 'inline'
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
  const { classes, temperature = generateTemp(tempBase), humidity = generateHumid(humidBase), light = generateLight(), handleOpen } = props;

  return (
    <Card className={classes.card} raised>
      <CardContent className={classes.content}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Environment Overview
        </Typography>
        <div className={classes.row}>
          <Typography variant="h5" component="h2" className={classes.inline}>
            Temperature: <span style={getTextStyle(temperature, tempBase)}>{temperature} F</span>
          </Typography>
          <Tooltip title="Show Temperature Time Series Data">
            <IconButton className={classes.timeline} onClick={handleOpen('temperatureOpen')}>
              <Timeline />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.row}>
          <Typography variant="h5" component="h2" className={classes.inline}>
            Humidity: <span style={getTextStyle(humidity, humidBase)}>{humidity} %</span>
          </Typography>
          <Tooltip title="Show Humidity Time Series Data">
            <IconButton className={classes.timeline} onClick={handleOpen('humidityOpen')}>
              <Timeline />
            </IconButton>
          </Tooltip>
        </div>
        <Typography variant="h5" component="h2" className={classes.inline}>
          Lights: {light}
        </Typography>
      </CardContent>
    </Card>
  );
}

EnvOverview.propTypes = {
  classes: PropTypes.object.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default withStyles(styles)(EnvOverview);
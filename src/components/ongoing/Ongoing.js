import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Badge, Tooltip, Zoom, Card, CardContent } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Assignment, Announcement, Build } from '@material-ui/icons'

const Ongoing = ({ OCRs, SARs, DARs, alerts, tasks, hazards, classes, workOrders, handleOpen }) => {
  const numReports = totalReports(OCRs, SARs, DARs);
  const numNotices = totalNotices(alerts, tasks, hazards)
  const numOrders = workOrders.length;
  return numReports + numNotices + numOrders > 0 ? (
    <Card className={classes.card} raised style={{ width: 90 }}>
      <CardContent className={classes.content}>
        {numReports > 0 && (
          <Tooltip title={ReportTitle(OCRs, SARs, DARs)} TransitionComponent={Zoom}>
            <IconButton aria-label={`${numReports} Unresolved Reports`} className={classes.iconButton} onClick={handleOpen('reportsListOpen')}>
              <Badge badgeContent={numReports} color="primary">
                <Assignment className={classes.icon} />
              </Badge>
            </IconButton>
          </Tooltip>
        )}
        {numNotices > 0 && (
          <Tooltip title={NoticeTitle(alerts, tasks, hazards)} TransitionComponent={Zoom}>
            <IconButton aria-label={`${numNotices} Notices`} className={classes.iconButton} onClick={handleOpen('noticesListOpen')}>
              <Badge badgeContent={numNotices} color="primary">
                <Announcement className={classes.icon} />
              </Badge>
            </IconButton>
          </Tooltip>
        )}
        {numOrders > 0 && (
          <Tooltip title={`${numOrders} Open Order${numOrders > 1 ? 's' : ''}`} TransitionComponent={Zoom}>
            <IconButton aria-label={`${numOrders} Open Orders`} className={classes.iconButton} onClick={handleOpen('ordersListOpen')}>
              <Badge badgeContent={numOrders} color="primary">
                <Build className={classes.icon} />
              </Badge>
            </IconButton>
          </Tooltip>
        )}
      </CardContent>
    </Card>
  ) : null
};

const getWidth = (x, y, z) => {
  let total = 0;
  if (x > 0) total++;
  if (y > 0) total++;
  if (z > 0) total++;
  let width;
  switch (total) {
    case 1: width = 90;
      break;
    case 2: width = 120;
      break;
    case 3: width = 165;
      break;
    default: width = 0;
  }
  console.log('width: ', width)
  return width
}

const ReportTitle = (OCRs, SARs, DARs) => {
  return (
    <div>
      <h3>Unresolved Reports:</h3>
      {SARs.length > 0 && <p>Sick Animal Reports: {SARs.length}</p>}
      {DARs.length > 0 && <p>Dead Animal Reports: {DARs.length}</p>}
      {OCRs.length > 0 && <p>Overcrowded Cage Reports: {OCRs.length}</p>}
    </div>
  )
}

const NoticeTitle = (alerts, tasks, hazards) => {
  return (
    <div>
      <h3>Active Notices:</h3>
      {alerts.length > 0 && <p>Alerts: {alerts.length}</p>}
      {tasks.length > 0 && <p>Tasks: {tasks.length}</p>}
      {hazards.length > 0 && <p>Hazards: {hazards.length}</p>}
    </div>
  )
}

const totalReports = (OCRs, SARs, DARs) => {
  return OCRs.length + SARs.length + DARs.length
}

const totalNotices = (alerts, tasks, hazards) => {
  return alerts.length + tasks.length + hazards.length
}

const styles = theme => ({
  card: {
    padding: 0,
    opacity: .95
  },
  content: {
    padding: 5,
    display: 'inline'
  },
  iconButton: {
    padding: '17px 12px 12px 12px'
  },
  icon: {
    fontSize: 50
  }
})

Ongoing.propTypes = {
  OCRs: PropTypes.array,
  SARs: PropTypes.array,
  DARs: PropTypes.array,
  alerts: PropTypes.array,
  tasks: PropTypes.array,
  hazards: PropTypes.array,
  workOrders: PropTypes.array,
  classes: PropTypes.object.isRequired,
};

Ongoing.defaultProps = {
  OCRs: [],
  SARs: [],
  DARs: [],
  alerts: [],
  tasks: [],
  hazards: [],
  workOrders: [],
}

export default withStyles(styles)(Ongoing);
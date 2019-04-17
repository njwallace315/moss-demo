import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, IconButton, CardHeader, CardContent, Divider, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import EnvContent from './EnvContent'
import InventoryContent from './InventoryContent'
import SARContent from './SARContent'
import DARContent from './DARContent'
import OCRContent from './OCRContent';
import RoomDetailsContent from './RoomDetailsContent'
import OrdersContent from './OrdersContent';
import HazardsContent from './HazardsContent';
import TasksContent from './TasksContent';
import AletrsContent from './AletrsContent';

class ContentBlocks extends React.Component {

  handleClose = name => () => {
    this.setState({ [name]: false });
  }

  getCols = name => {
    const { roomOpen, researchOpen, husbandryOpen, veterinaryOpen } = this.props
    switch (name) {
      case 'room': return !researchOpen || (!husbandryOpen && !veterinaryOpen) ? 12 : 6
      case 'res': return !roomOpen || (!husbandryOpen && !veterinaryOpen) ? 12 : 6
      case 'hus': return !veterinaryOpen || (!roomOpen && !researchOpen) ? 12 : 6
      case 'vet': return !husbandryOpen || (!roomOpen && !researchOpen) ? 12 : 6
      default: return 0;
    }
  }

  render() {
    const {
      classes,
      handleOpen,
      inventory,
      SARs,
      OCRs,
      DARs,
      roomDetails,
      workOrders,
      hazards,
      tasks,
      alerts,
      orientation,
      roomOpen,
      researchOpen,
      husbandryOpen,
      veterinaryOpen,
      handleClose,
      temperature,
      humidity,
      light
    } = this.props;
    return (
      <Grid container justify="space-between" className={classes.root} style={orientation === 'vertical' ? { overflowY: 'scroll' } : null}>
        {(roomOpen || orientation === 'horizontal') && (
          <Grid item xs={orientation === 'horizontal' ? 6 : 12} className={classes.item} style={orientation === 'horizontal' ? { height: '50%' } : null}>
            {roomOpen && (
              <Card className={classes.card}>
                <CardHeader
                  className={classes.heading}
                  action={
                    <IconButton onClick={handleClose('roomOpen')}>
                      <Close />
                    </IconButton>
                  }
                  title="Room"
                />
                <CardContent className={classes.content}>
                  {alerts.length > 0 && (
                    <div>
                      <Divider className={classes.divider} />
                      <Typography variant="h6" className={classes.center}><em className={classes.em}>Open Alerts</em></Typography>
                      <AletrsContent alerts={alerts} />
                      <Divider className={classes.divider} />
                    </div>
                  )}
                  {workOrders && workOrders.length > 0 && (
                    <div>
                      <Divider className={classes.divider} />
                      <Typography variant="h6" className={classes.center}>Open Work Orders</Typography>
                      <OrdersContent orders={workOrders} />
                      <Divider className={classes.divider} />
                    </div>
                  )}
                  <EnvContent handleOpen={handleOpen} temperature={temperature} humidity={humidity} light={light} />
                  <InventoryContent inventory={inventory} />
                  <RoomDetailsContent roomDetails={roomDetails} />
                </CardContent>
              </Card>)}
          </Grid>
        )}
        {(researchOpen || orientation === 'horizontal') && (
          <Grid item xs={orientation === 'horizontal' ? 6 : 12} className={classes.item} style={orientation === 'horizontal' ? { height: '50%' } : null} >
            {researchOpen && (
              <Card className={classes.card}>
                <CardHeader
                  className={classes.heading}
                  action={
                    <IconButton onClick={handleClose('researchOpen')}>
                      <Close />
                    </IconButton>
                  }
                  title="Research"
                />
                <CardContent className={classes.content}>
                  {OCRs.length > 0 && (
                    <div>
                      <Divider className={classes.divider} />
                      <Typography variant="h6" className={classes.center}><em className={classes.em}>Time Sensitive</em></Typography>
                      <OCRContent OCRs={OCRs} />
                      <Divider className={classes.divider} />
                    </div>
                  )}
                  <DARContent DARs={DARs} />
                  <HazardsContent hazards={hazards} />
                </CardContent>
              </Card>)}
          </Grid>
        )}
        {(husbandryOpen || orientation === 'horizontal') && (
          <Grid item xs={orientation === 'horizontal' ? 6 : 12} className={classes.item} style={orientation === 'horizontal' ? { height: '50%' } : null} >
            {husbandryOpen && (
              <Card className={classes.card}>
                <CardHeader
                  className={classes.heading}
                  action={
                    <IconButton onClick={handleClose('husbandryOpen')}>
                      <Close />
                    </IconButton>
                  }
                  title="Husbandry"
                />
                <CardContent className={classes.content}>
                  <TasksContent tasks={tasks} />
                </CardContent>
              </Card>)}
          </Grid>
        )}
        {(veterinaryOpen || orientation === 'horizontal') && (
          <Grid item xs={orientation === 'horizontal' ? 6 : 12} className={classes.item} style={orientation === 'horizontal' ? { height: '50%' } : null} >
            {veterinaryOpen && (
              <Card className={classes.card}>
                <CardHeader
                  className={classes.heading}
                  action={
                    <IconButton onClick={handleClose('veterinaryOpen')}>
                      <Close />
                    </IconButton>
                  }
                  title="Veterinary"
                />
                <CardContent className={classes.content}>

                  {SARs && SARs.length > 0 && (
                    <div>
                      <Divider className={classes.divider} />
                      <Typography variant="h6" className={classes.center}><em className={classes.em}>Time Sensitive</em></Typography>
                      <SARContent SARs={SARs} />
                      <Divider className={classes.divider} />
                    </div>
                  )}
                </CardContent>

              </Card>)}
          </Grid>
        )}
      </Grid>
    );
  }
};

ContentBlocks.propTypes = {
  classes: PropTypes.object.isRequired,
  handleOpen: PropTypes.func.isRequired,
  SARs: PropTypes.array,
  DARs: PropTypes.array,
  OCRs: PropTypes.array,
  workOrders: PropTypes.array,
  roomDetails: PropTypes.array,
  hazards: PropTypes.array,
  alerts: PropTypes.array,
  tasks: PropTypes.array,
  orientation: PropTypes.string.isRequired,
};

ContentBlocks.defaultProps = {
  SARs: [],
  DARs: [],
  OCRs: [],
  workOrders: [],
  roomDetails: [],
  hazards: [],
  tasks: [],
  alerts: []
}

const styles = theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  item: {
    padding: 8,
  },
  card: {
    height: '100%',
    width: '100%',
    opacity: .95,
    overflowY: 'scroll',
    position: 'relative',
    zIndex: 1000
  },
  content: {
    padding: 0
  },
  heading: {
    padding: '8px 16px'
  },
  center: {
    textAlign: 'center'
  },
  em: {
    color: theme.palette.primary.main
  },
  divider: {
    margin: '5px 0px'
  }
})

export default withStyles(styles)(ContentBlocks);
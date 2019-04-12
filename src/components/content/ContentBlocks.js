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

class ContentBlocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomOpen: true,
      researchOpen: true,
      husbandryOpen: true,
      veterinaryOpen: true
    }
  }

  handleClose = name => () => {
    console.log('here')
    this.setState({ [name]: false });
  }

  getCols = name => {
    const { roomOpen, researchOpen, husbandryOpen, veterinaryOpen } = this.state;
    switch (name) {
      case 'room': return !researchOpen || (!husbandryOpen && !veterinaryOpen) ? 12 : 6
      case 'res': return !roomOpen || (!husbandryOpen && !veterinaryOpen) ? 12 : 6
      case 'hus': return !veterinaryOpen || (!roomOpen && !researchOpen) ? 12 : 6
      case 'vet': return !husbandryOpen || (!roomOpen && !researchOpen) ? 12 : 6
      default: return 0;
    }
  }

  render() {
    const { classes, handleOpen, inventory, SARs, OCRs, DARs, roomDetails, workOrders, hazards } = this.props;
    const { roomOpen, researchOpen, husbandryOpen, veterinaryOpen } = this.state;
    let numOpen = 0;
    if (roomOpen) numOpen++;
    if (researchOpen) numOpen++;
    if (husbandryOpen) numOpen++;
    if (veterinaryOpen) numOpen++;
    return (
      <Grid container justify="space-between" className={classes.full}>
        {roomOpen && (
          <Grid item xs={this.getCols('room')} className={classes.item} style={{ height: numOpen > 1 ? '50%' : '100%' }}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.heading}
                action={
                  <IconButton onClick={this.handleClose('roomOpen')}>
                    <Close />
                  </IconButton>
                }
                title="Room"
              />
              <CardContent className={classes.content}>

                {workOrders && workOrders.length > 0 && (
                  <div>
                    <Divider />
                    <Typography variant="h6" className={classes.center}>Open Orders</Typography>
                    <OrdersContent orders={workOrders} />
                    <Divider />
                  </div>
                )}
                <EnvContent handleOpen={handleOpen} />
                <InventoryContent inventory={inventory} />
                <RoomDetailsContent roomDetails={roomDetails} />
              </CardContent>
            </Card>
          </Grid>
        )}
        {researchOpen && (
          <Grid item xs={this.getCols('res')} className={classes.item} style={{ height: numOpen > 1 ? '50%' : '100%' }} >
            <Card className={classes.card}>
              <CardHeader
                className={classes.heading}
                action={
                  <IconButton onClick={this.handleClose('researchOpen')}>
                    <Close />
                  </IconButton>
                }
                title="Research"
              />
              <CardContent className={classes.content}>
                {OCRs.length > 0 && (
                  <div>
                    <Divider />
                    <Typography variant="h6" className={classes.center}><em className={classes.em}>Time Sensitive</em></Typography>
                    <OCRContent OCRs={OCRs} />
                    <Divider />
                  </div>
                )}
                <DARContent DARs={DARs} />
                <HazardsContent hazards={hazards} />
              </CardContent>
            </Card>
          </Grid>
        )}
        {husbandryOpen && (
          <Grid item xs={this.getCols('hus')} className={classes.item} style={{ height: numOpen > 1 ? '50%' : '100%' }} >
            <Card className={classes.card}>
              <CardHeader
                className={classes.heading}
                action={
                  <IconButton onClick={this.handleClose('husbandryOpen')}>
                    <Close />
                  </IconButton>
                }
                title="Husbandry"
              />
            </Card>
          </Grid>
        )}
        {veterinaryOpen && (
          <Grid item xs={this.getCols('vet')} className={classes.item} style={{ height: numOpen > 1 ? '50%' : '100%' }} >
            <Card className={classes.card}>
              <CardHeader
                className={classes.heading}
                action={
                  <IconButton onClick={this.handleClose('veterinaryOpen')}>
                    <Close />
                  </IconButton>
                }
                title="Veterinary"
              />
              <CardContent className={classes.content}>

                {SARs && SARs.length > 0 && (
                  <div>
                    <Divider />
                    <Typography variant="h6" className={classes.center}><em className={classes.em}>Time Sensitive</em></Typography>
                    <SARContent SARs={SARs} />
                    <Divider />
                  </div>
                )}
              </CardContent>

            </Card>
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
};

ContentBlocks.defaultProps = {
  SARs: [],
  DARs: [],
  OCRs: [],
  workOrders: [],
  roomDetails: [],
  hazards: []
}

const styles = theme => ({
  full: {
    height: '100%',
    width: '100%'
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
  }
})

export default withStyles(styles)(ContentBlocks);
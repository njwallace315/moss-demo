import React, { Component } from 'react';
import './App.css';
import { Fab, Tooltip } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Add } from '@material-ui/icons';
import ActionsDialog from './components/actions/ActionsDialog';
import ReportActionsDialog from './components/actions/ReportActionsDialog';
import NoticeActionsDialog from './components/actions/NoticeActionsDialog';
import SAR from './components/actions/reports/SAR';
import DAR from './components/actions/reports/DAR';
import OCR from './components/actions/reports/OCR';
import EnvOverview from './components/room/environment/EnvOverview'
import Temperature from './components/room/environment/time-series/Temperature'
import Humidity from './components/room/environment/time-series/Humidity'
import Hazard from './components/actions/notices/Hazard';
import Alert from './components/actions/notices/Alert';
import Task from './components/actions/notices/Task';
import Ongoing from './components/room/ongoing/Ongoing';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import WorkOrderActionsDialog from './components/actions/WorkOrderActionsDialog';
import LightSchedule from './components/actions/work-orders/LightSchedule';
import Maintenance from './components/actions/work-orders/Maintenance'
import { generateHumidData, generateTempData } from './helpers'
import demoInventory from './inventory'
import Item from './components/room/inventory/Item'
import ReportsList from './components/room/ongoing/ReportsList'
import background from './static/B1451_h_ipad_6th.svg'
import OrdersList from './components/room/ongoing/OrdersList';
import NoticesList from './components/actions/notices/NoticesList'
import ContentBlocks from './components/content/ContentBlocks'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      envOpen: true,
      temps: generateTempData(),
      humids: generateHumidData(),
      light: 'On',
      inventory: demoInventory.slice(0),
      roomDetails: [
        { label: 'SPF Level', value: '2' },
        { label: 'Models', value: 'Mouse' },
        { label: 'Emergency Power', value: 'Available' },
      ]
    }
  }

  handleOpen = name => () => {
    this.setState({ [name]: true });
  }

  handleClose = name => () => {
    this.setState({ [name]: false });
  }

  closeAll = () => {
    this.setState({
      actionsOpen: false,
      reportOpen: false,
      noticeOpen: false,
      workOrderOpen: false,
      SAROpen: false,
      DAROpen: false,
      OCROpen: false,
      reportsListOpen: false,
      temperatureOpen: false,
      hazardOpen: false,
      alertOpen: false,
      taskOpen: false,
      lightOpen: false,
      maintenanceOpen: false,
      ordersListOpen: false,
      noticesListOpen: false
    });
  }

  handleSubmit = name => data => {
    const arr = Array.isArray(this.state[name]) ? this.state[name].slice(0) : [];
    arr.push(data)
    this.setState({ [name]: arr }, this.closeAll);
  }

  render() {
    const { classes } = this.props;
    const {
      actionsOpen,
      reportOpen,
      noticeOpen,
      SAROpen,
      DAROpen,
      OCROpen,
      temps,
      temperatureOpen,
      humids,
      humidityOpen,
      envOpen,
      hazardOpen,
      alertOpen,
      taskOpen,
      light,
      DARs,
      SARs,
      OCRs,
      alerts,
      tasks,
      hazards,
      workOrderOpen,
      lightOpen,
      workOrders,
      maintenanceOpen,
      inventory,
      reportsListOpen,
      ordersListOpen,
      noticesListOpen,
      roomDetails
    } = this.state;
    return (
      <div className="App" style={{ width: 1024, height: 768 }}>
        <img style={styles.img} src={background} alt="room enlarged view" />
        <MuiThemeProvider theme={theme}>
          {/* Define clickable border regions */}
          <div style={styles.left} />
          <div style={styles.top} />
          <div style={styles.right} />
          <div style={styles.bottom} />
          <div style={styles.content}>
            {inventory.filter(x => x.type === 'item').map(item => <Item item={item} workOrders={workOrders} />)}
            <div style={styles.full}>
              <ContentBlocks
                handleOpen={this.handleOpen}
                inventory={inventory}
                SARs={SARs}
                DARs={DARs}
                OCRs={OCRs}
                roomDetails={roomDetails}
                workOrders={workOrders}
                alerts={alerts}
                hazards={hazards}
                tasks={tasks}
              />
            </div>


            {/** End dialogs */}
          </div>
          {/** Layer one dialogs */}
          {actionsOpen && <ActionsDialog open={actionsOpen} onClose={this.handleClose('actionsOpen')} handleOpen={this.handleOpen} />}

          {/** Layer two dialogs */}
          {reportOpen && <ReportActionsDialog onClose={this.handleClose('reportOpen')} handleOpen={this.handleOpen} />}
          {noticeOpen && <NoticeActionsDialog onClose={this.handleClose('noticeOpen')} handleOpen={this.handleOpen} />}
          {workOrderOpen && <WorkOrderActionsDialog onClose={this.handleClose('workOrderOpen')} handleOpen={this.handleOpen} />}
          {reportsListOpen && <ReportsList onClose={this.handleClose('reportsListOpen')} SARs={SARs} DARs={DARs} OCRs={OCRs} />}
          {ordersListOpen && <OrdersList onClose={this.handleClose('ordersListOpen')} workOrders={workOrders} />}
          {noticesListOpen && <NoticesList onClose={this.handleClose('noticesListOpen')} hazards={hazards} alerts={alerts} tasks={tasks} />}
          {/* <div className={classes.chart}>
            {temperatureOpen && <Temperature temps={temps} onClose={this.handleClose('temperatureOpen')} />}
            {humidityOpen && <Humidity values={humids} onClose={this.handleClose('humidityOpen')} />}
          </div> */}
          {/** Layer three dialogs */}
          {SAROpen && <SAR open={SAROpen} onClose={this.handleClose('SAROpen')} onSubmit={this.handleSubmit('SARs')} />}
          {DAROpen && <DAR open={DAROpen} onClose={this.handleClose('DAROpen')} onSubmit={this.handleSubmit('DARs')} />}
          {OCROpen && <OCR open={OCROpen} onClose={this.handleClose('OCROpen')} onSubmit={this.handleSubmit('OCRs')} />}
          {hazardOpen && <Hazard onClose={this.handleClose('hazardOpen')} onSubmit={this.handleSubmit('hazards')} />}
          {alertOpen && <Alert onClose={this.handleClose('alertOpen')} onSubmit={this.handleSubmit('alerts')} />}
          {taskOpen && <Task onClose={this.handleClose('taskOpen')} onSubmit={this.handleSubmit('tasks')} />}
          {lightOpen && <LightSchedule onClose={this.handleClose('lightOpen')} onSubmit={this.handleSubmit('workOrders')} />}
          {maintenanceOpen && <Maintenance onClose={this.handleClose('maintenanceOpen')} onSubmit={this.handleSubmit('workOrders')} inventory={inventory} />}
        </MuiThemeProvider>
        <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleOpen('actionsOpen')}>
          <Add className={classes.icon} />
        </Fab>
      </div >
    );
  }
}

const styles = {
  img: {
    zIndex: 100,
    position: 'absolute',
    height: 768,
    width: 1024
  },
  fab: {
    position: 'absolute',
    zIndex: 1000,
  },
  left: {
    width: 47,
    height: '100%',
    display: 'inline-block',
    opacity: .5,
    backgroundColor: 'blue',
    position: 'absolute',
    zIndex: '900'
  },
  top: {
    height: 68,
    width: 920,
    left: 55,
    display: 'inline-block',
    position: 'absolute',
    zIndex: '900',
    backgroundColor: 'red',
    opacity: .5,
  },
  bottom: {
    height: 55,
    width: 920,
    left: 55,
    top: 720,
    display: 'inline-block',
    position: 'absolute',
    zIndex: '900',
    backgroundColor: 'yellow',
    opacity: .5,
  },
  right: {
    width: 42,
    left: 975,
    height: '100%',
    display: 'inline-block',
    opacity: .5,
    backgroundColor: 'green',
    position: 'absolute',
    zIndex: '900'
  },
  content: {
    position: 'absolute',
    top: 75,
    left: 55,
    zIndex: 1000,
    height: '82%',
    width: '89.5%',
  },
  chart: {
    width: '75%',
    position: 'relative',
    margin: '200px auto'
  },
  ongoing: {
    marginTop: 175
  },
  full: {
    height: '100%', width: '100%'
  }
}

export default withStyles(styles)(App);

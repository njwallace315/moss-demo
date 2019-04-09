import React, { Component } from 'react';
import './App.css';
import { Fab, Tooltip } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Add } from '@material-ui/icons';
import ActionsDialog from './components/actions/ActionsDialog';
import ReportActionsDialog from './components/actions/ReportActionsDialog';
import NoticeActionsDialog from './components/actions/NoticeActionsDialog';
import SAR from './components/reports/SAR';
import DAR from './components/reports/DAR';
import OCR from './components/reports/OCR';
import EnvOverview from './components/environment/EnvOverview'
import Temperature from './components/environment/time-series/Temperature'
import Humidity from './components/environment/time-series/Humidity'
import Hazard from './components/notices/Hazard';
import Alert from './components/notices/Alert';
import Task from './components/notices/Task';
import Ongoing from './components/ongoing/Ongoing';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import WorkOrderActionsDialog from './components/actions/WorkOrderActionsDialog';
import LightSchedule from './components/work-orders/LightSchedule';
import Maintenance from './components/work-orders/Maintenance'
import { generateHumidData, generateTempData } from './helpers'
import demoInventory from './inventory'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      envOpen: true,
      temps: generateTempData(),
      humids: generateHumidData(),
      SARs: [{ text: 'test' }],
      light: 'On',
      inventory: Object.assign({}, demoInventory),
      maintenanceOpen: true
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
    });
  }

  applyMaintenanceToItem = order => {
    console.log('here')
    const inventory = Object.assign({}, this.state.inventory)
    if (order.itemKey && inventory[order.itemKey]) {
      inventory[order.itemKey].orders.push(order)
      console.log('newInventory: ', inventory)
      this.setState({ inventory });
    } else {
      throw new Error('could not apply work order to item. order: ', order)
    }
  }

  handleSubmit = name => data => {
    console.log('name: ', name)
    console.log('data: ', data)
    if (name === 'workOrders' && data.type === 'maintenance' && data.itemKey) {
      this.applyMaintenanceToItem(data)
    }
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
    } = this.state;
    const bscOrders = inventory.BSC.orders;
    return (
      <div className="App" style={styles({ spacing: {} }).root}>
        <MuiThemeProvider theme={theme}>
          {/** Layer one dialogs */}
          {actionsOpen && <ActionsDialog open={actionsOpen} onClose={this.handleClose('actionsOpen')} handleOpen={this.handleOpen} />}
          {envOpen && <EnvOverview
            temperature={temps[temps.length - 1]}
            humidity={humids[humids.length - 1]}
            light={light}
            handleOpen={this.handleOpen}
            onClose={this.handleClose('envOpen')}
          />} {/** not really a dialog but it's similar */}
          <Ongoing
            SARs={SARs}
            DARs={DARs}
            OCRs={OCRs}
            alerts={alerts}
            tasks={tasks}
            hazards={hazards}
            workOrders={workOrders}
          />

          {/** Layer two dialogs */}
          {reportOpen && <ReportActionsDialog onClose={this.handleClose('reportOpen')} handleOpen={this.handleOpen} />}
          {noticeOpen && <NoticeActionsDialog onClose={this.handleClose('noticeOpen')} handleOpen={this.handleOpen} />}
          {workOrderOpen && <WorkOrderActionsDialog onClose={this.handleClose('workOrderOpen')} handleOpen={this.handleOpen} />}
          <div className={classes.chart}>
            {temperatureOpen && <Temperature temps={temps} onClose={this.handleClose('temperatureOpen')} />}
            {humidityOpen && <Humidity values={humids} onClose={this.handleClose('humidityOpen')} />}
          </div>

          {/** Layer three dialogs */}
          {SAROpen && <SAR open={SAROpen} onClose={this.handleClose('SAROpen')} onSubmit={this.handleSubmit('SARs')} />}
          {DAROpen && <DAR open={DAROpen} onClose={this.handleClose('DAROpen')} onSubmit={this.handleSubmit('DARs')} />}
          {OCROpen && <OCR open={OCROpen} onClose={this.handleClose('OCROpen')} onSubmit={this.handleSubmit('OCRs')} />}
          {hazardOpen && <Hazard onClose={this.handleClose('hazardOpen')} onSubmit={this.handleSubmit('hazards')} />}
          {alertOpen && <Alert onClose={this.handleClose('alertOpen')} onSubmit={this.handleSubmit('alerts')} />}
          {taskOpen && <Task onClose={this.handleClose('taskOpen')} onSubmit={this.handleSubmit('tasks')} />}
          {lightOpen && <LightSchedule onClose={this.handleClose('lightOpen')} onSubmit={this.handleSubmit('workOrders')} />}
          {maintenanceOpen && <Maintenance onClose={this.handleClose('maintenanceOpen')} onSubmit={this.handleSubmit('workOrders')} inventory={inventory} />}
          {/** End dialogs */}
          <Tooltip title={bscOrders.length > 0 ? `${bscOrders.length} pending work order${bscOrders.length > 0 ? 's' : ''}` : inventory.BSC.description}>
            <div style={{ opacity: .9, height: 100, width: 100, backgroundColor: bscOrders.length > 0 ? theme.palette.primary.main : 'gray' }}>
              <p style={{ textAlign: 'center', margin: 'auto' }}>{inventory.BSC.name}</p>
            </div>
          </Tooltip>
          <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleOpen('actionsOpen')}>
            <Add />
          </Fab>
        </MuiThemeProvider>
      </div >
    );
  }
}

const styles = theme => ({
  root: {
    height: '80vh',
    background: 'repeating-linear-gradient(45deg, #000, #000 100px, #fff 100px, #fff 200px)'
  },
  img: {
    opacity: .5,
    '&:hover': {
      opacity: 1,
    },
  },
  fab: {
    margin: theme.spacing.unit,
  },
  chart: {
    width: '50%'
  }
});

export default withStyles(styles)(App);

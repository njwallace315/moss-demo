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
import demoInventory from './private/inventory'
import Item from './components/inventory/Item'
import ReportsList from './components/reports/ReportsList'
import background from './static/B1451_h.svg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      envOpen: true,
      temps: generateTempData(),
      humids: generateHumidData(),
      light: 'On',
      inventory: demoInventory.slice(0),
      OCROpen: true
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
      reportsListOpen: true,
      temperatureOpen: false,
      hazardOpen: false,
      alertOpen: false,
      taskOpen: false,
      lightOpen: false,
      maintenanceOpen: false,
    });
  }

  // applyMaintenanceToItem = order => {
  //   const inventory = Object.assign({}, this.state.inventory)
  //   if (order.itemKey && inventory[order.itemKey]) {
  //     inventory[order.itemKey].orders.push(order)
  //     this.setState({ inventory });
  //   } else {
  //     throw new Error('could not apply work order to item. order: ', order)
  //   }
  // }

  handleSubmit = name => data => {
    // if (name === 'workOrders' && data.type === 'maintenance' && data.itemKey) {
    //   this.applyMaintenanceToItem(data)
    // }
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
      reportsListOpen
    } = this.state;
    return (
      <div className="App" style={{ width: '100%', height: '100%' }}>
        <img style={{ width: 1350, height: 1008, zIndex: 100, position: 'absolute' }} src={background} />
        <MuiThemeProvider theme={theme}>
          <div style={{}}>
            {/** Layer one dialogs */}
            {actionsOpen && <ActionsDialog open={actionsOpen} onClose={this.handleClose('actionsOpen')} handleOpen={this.handleOpen} />}
            {envOpen &&
              <div style={{ position: 'absolute', zIndex: 1000 }}>
                <EnvOverview
                  temperature={temps[temps.length - 1]}
                  humidity={humids[humids.length - 1]}
                  light={light}
                  handleOpen={this.handleOpen}
                  onClose={this.handleClose('envOpen')}
                />
              </div>

            } {/** not really a dialog but it's similar */}
            <div style={{ position: 'absolute', top: 175, zIndex: 1000 }}>
              <Ongoing
                SARs={SARs}
                DARs={DARs}
                OCRs={OCRs}
                alerts={alerts}
                tasks={tasks}
                hazards={hazards}
                workOrders={workOrders}
              />
            </div>

            {/** Layer two dialogs */}
            {reportOpen && <ReportActionsDialog onClose={this.handleClose('reportOpen')} handleOpen={this.handleOpen} />}
            {noticeOpen && <NoticeActionsDialog onClose={this.handleClose('noticeOpen')} handleOpen={this.handleOpen} />}
            {workOrderOpen && <WorkOrderActionsDialog onClose={this.handleClose('workOrderOpen')} handleOpen={this.handleOpen} />}
            {reportsListOpen && <ReportsList onClose={this.handleClose('reportsListOpen')} SARs={SARs} DARs={DARs} OCRs={OCRs} />}
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
            {inventory.filter(x => x.type === 'item').map(item => <Item item={item} workOrders={workOrders} />)}
            <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.handleOpen('actionsOpen')}>
              <Add />
            </Fab>
          </div>
        </MuiThemeProvider>
      </div >
    );
  }
}

const styles = {
  img: {
    opacity: .5,
    '&:hover': {
      opacity: 1,
    },
  },
  fab: {
    marginTop: '90vh',
    marginLeft: '93vw',
    height: 75,
    width: 75,
    zIndex: 1000
  },
  chart: {
    width: '70%',
    zIndex: 1000,
    position: 'absolute',
    marginTop: 300,
    marginLeft: 200
  }
}

export default withStyles(styles)(App);

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
import Item from './components/inventory/Item'
import ReportsList from './components/reports/ReportsList'
import background from './static/B1451_h_ipad_6th.svg'
import OrdersList from './components/work-orders/OrdersList';
import NoticesList from './components/notices/NoticesList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      envOpen: true,
      temps: generateTempData(),
      humids: generateHumidData(),
      light: 'On',
      inventory: demoInventory.slice(0),
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
      noticesListOpen
    } = this.state;
    return (
      <div className="App" style={{ width: '100%', height: '100%' }}>
        <img style={styles.img} src={background} alt="room enlarged view" />
        <MuiThemeProvider theme={theme}>
          <div style={styles.content}>
            {/** Layer one dialogs */}
            {actionsOpen && <ActionsDialog open={actionsOpen} onClose={this.handleClose('actionsOpen')} handleOpen={this.handleOpen} />}
            {envOpen &&
              <EnvOverview
                temperature={temps[temps.length - 1]}
                humidity={humids[humids.length - 1]}
                light={light}
                handleOpen={this.handleOpen}
                onClose={this.handleClose('envOpen')}
              />

            } {/** not really a dialog but it's similar */}
            <div style={styles.ongoing}>
              <Ongoing
                SARs={SARs}
                DARs={DARs}
                OCRs={OCRs}
                alerts={alerts}
                tasks={tasks}
                hazards={hazards}
                workOrders={workOrders}
                handleOpen={this.handleOpen}
              />
            </div>


            {/** Layer two dialogs */}
            {reportOpen && <ReportActionsDialog onClose={this.handleClose('reportOpen')} handleOpen={this.handleOpen} />}
            {noticeOpen && <NoticeActionsDialog onClose={this.handleClose('noticeOpen')} handleOpen={this.handleOpen} />}
            {workOrderOpen && <WorkOrderActionsDialog onClose={this.handleClose('workOrderOpen')} handleOpen={this.handleOpen} />}
            {reportsListOpen && <ReportsList onClose={this.handleClose('reportsListOpen')} SARs={SARs} DARs={DARs} OCRs={OCRs} />}
            {ordersListOpen && <OrdersList onClose={this.handleClose('ordersListOpen')} workOrders={workOrders} />}
            {noticesListOpen && <NoticesList onClose={this.handleClose('noticesListOpen')} hazards={hazards} alerts={alerts} tasks={tasks} />}
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
              <Add className={classes.icon} />
            </Fab>
          </div>
        </MuiThemeProvider>
      </div >
    );
  }
}

const styles = {
  img: {
    zIndex: 100,
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  fab: {
    position: 'absolute',
    zIndex: 1000,
    top: 700,
    left: 950
  },
  content: {
    position: 'absolute',
    padding: '7% 0px 0px 5%',
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
  }
}

export default withStyles(styles)(App);

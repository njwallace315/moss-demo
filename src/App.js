import React, { Component } from 'react';
import './App.css';
import { Fab, Hidden, IconButton } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Add } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu'
import ActionsDialog from './components/actions/ActionsDialog';
import ReportActionsDialog from './components/actions/ReportActionsDialog';
import NoticeActionsDialog from './components/actions/NoticeActionsDialog';
import SAR from './components/actions/reports/SAR';
import DAR from './components/actions/reports/DAR';
import OCR from './components/actions/reports/OCR';
// import EnvOverview from './components/room/environment/EnvOverview'
import Temperature from './components/room/environment/time-series/Temperature'
import Humidity from './components/room/environment/time-series/Humidity'
import Hazard from './components/actions/notices/Hazard';
import Alert from './components/actions/notices/Alert';
import Task from './components/actions/notices/Task';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme'
import WorkOrderActionsDialog from './components/actions/WorkOrderActionsDialog';
import LightSchedule from './components/actions/work-orders/LightSchedule';
import Maintenance from './components/actions/work-orders/Maintenance'
import { generateHumidData, generateTempData } from './helpers'
import { horizontalInventory, verticalInventory } from './inventory'
import Item from './components/room/inventory/Item'
import ReportsList from './components/room/ongoing/ReportsList'
import background_h from './static/B1451_h_ipad_6th.svg'
import background_v from './static/B1451_v_ipad_6th.svg'
import OrdersList from './components/room/ongoing/OrdersList';
import NoticesList from './components/actions/notices/NoticesList'
import ContentBlocks from './components/content/ContentBlocks'
import Menu from './components/actions/Menu'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

function SimpleMediaQuery() {
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return <div style={{ height: 100, width: 100, '@media screen and (orientation:landscape)': { backgroundColor: 'red' } }}>{`(max-width:600px) matches: ${matches}`}</div>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      envOpen: true,
      temps: generateTempData(),
      humids: generateHumidData(),
      light: 'On',
      inventoryH: horizontalInventory.slice(0),
      inventoryV: verticalInventory.slice(0),
      roomDetails: [
        { label: 'SPF Level', value: '2' },
        { label: 'Models', value: 'Mouse' },
        { label: 'Emergency Power', value: 'Available' },
      ],
      researchOpen: true,
      roomOpen: true,
      veterinaryOpen: true,
      husbandryOpen: true
    }
  }

  handleOpen = name => () => {
    this.setState({ [name]: true });
  }

  handleClose = name => () => {
    this.setState({ [name]: false });
  }

  toggle = name => () => {
    this.setState({ [name]: !this.state[name] });
  }

  menuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  menuClose = () => {
    this.setState({ anchorEl: null });
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
      noticesListOpen: false,
    });
  }

  handleSubmit = name => data => {
    const arr = Array.isArray(this.state[name]) ? this.state[name].slice(0) : [];
    arr.push(data)
    this.setState({ [name]: arr }, this.closeAll);
  }

  renderDialogs = () => {
    const {
      actionsOpen,
      reportOpen,
      noticeOpen,
      SAROpen,
      DAROpen,
      OCROpen,
      hazardOpen,
      alertOpen,
      taskOpen,
      workOrderOpen,
      lightOpen,
      maintenanceOpen,
      reportsListOpen,
      ordersListOpen,
      noticesListOpen,
      SARs,
      DARs,
      OCRs,
      workOrders,
      hazards,
      alerts,
      tasks,
      inventoryV,
      temperatureOpen,
      humidityOpen,
      temps,
      humids
    } = this.state
    return (
      <div>
        {/** Layer one dialogs */}
        {actionsOpen && <ActionsDialog open={actionsOpen} onClose={this.handleClose('actionsOpen')} handleOpen={this.handleOpen} />}

        {/** Layer two dialogs */}
        {reportOpen && <ReportActionsDialog onClose={this.handleClose('reportOpen')} handleOpen={this.handleOpen} />}
        {noticeOpen && <NoticeActionsDialog onClose={this.handleClose('noticeOpen')} handleOpen={this.handleOpen} />}
        {workOrderOpen && <WorkOrderActionsDialog onClose={this.handleClose('workOrderOpen')} handleOpen={this.handleOpen} />}
        {reportsListOpen && <ReportsList onClose={this.handleClose('reportsListOpen')} SARs={SARs} DARs={DARs} OCRs={OCRs} />}
        {ordersListOpen && <OrdersList onClose={this.handleClose('ordersListOpen')} workOrders={workOrders} />}
        {noticesListOpen && <NoticesList onClose={this.handleClose('noticesListOpen')} hazards={hazards} alerts={alerts} tasks={tasks} />}
        {temperatureOpen && <Temperature temps={temps} onClose={this.handleClose('temperatureOpen')} />}
        {humidityOpen && <Humidity values={humids} onClose={this.handleClose('humidityOpen')} />}
        {/** Layer three dialogs */}
        {SAROpen && <SAR open={SAROpen} onClose={this.handleClose('SAROpen')} onSubmit={this.handleSubmit('SARs')} />}
        {DAROpen && <DAR open={DAROpen} onClose={this.handleClose('DAROpen')} onSubmit={this.handleSubmit('DARs')} />}
        {OCROpen && <OCR open={OCROpen} onClose={this.handleClose('OCROpen')} onSubmit={this.handleSubmit('OCRs')} />}
        {hazardOpen && <Hazard onClose={this.handleClose('hazardOpen')} onSubmit={this.handleSubmit('hazards')} />}
        {alertOpen && <Alert onClose={this.handleClose('alertOpen')} onSubmit={this.handleSubmit('alerts')} />}
        {taskOpen && <Task onClose={this.handleClose('taskOpen')} onSubmit={this.handleSubmit('tasks')} />}
        {lightOpen && <LightSchedule onClose={this.handleClose('lightOpen')} onSubmit={this.handleSubmit('workOrders')} />}
        {maintenanceOpen && <Maintenance onClose={this.handleClose('maintenanceOpen')} onSubmit={this.handleSubmit('workOrders')} inventory={inventoryV} />}
      </div>
    )

  }

  closeAllContent = () => {
    this.setState({
      roomOpen: false,
      researchOpen: false,
      husbandryOpen: false,
      veterinaryOpen: false,
    });
  }
  openAllContent = () => {
    this.setState({
      roomOpen: true,
      researchOpen: true,
      husbandryOpen: true,
      veterinaryOpen: true,
    });
  }

  render() {
    const {
      workOrders,
      inventoryH,
      inventoryV,
      researchOpen,
      roomOpen,
      veterinaryOpen,
      husbandryOpen,
      SARs,
      DARs,
      OCRs,
      roomDetails,
      hazards,
      alerts,
      tasks,
      anchorEl,
      classes
    } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <SimpleMediaQuery />
        {/* {this.renderDialogs()} */}
        {/* <Menu
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          toggleResearch={this.toggle('researchOpen')}
          toggleHusbandry={this.toggle('husbandryOpen')}
          toggleRoom={this.toggle('roomOpen')}
          toggleVet={this.toggle('veterinaryOpen')}
          researchOpen={researchOpen}
          roomOpen={roomOpen}
          veterinaryOpen={veterinaryOpen}
          husbandryOpen={husbandryOpen}
          closeContent={this.closeAllContent}
          openContent={this.openAllContent}
          anchorEl={anchorEl}
          onClose={this.menuClose}
        />

        <Hidden mdDown>
          <div>
            <img style={horizontalStyles.img} src={background_h} alt="room enlarged view" />
            <div style={horizontalStyles.left} />
            <div style={horizontalStyles.top} />
            <div style={horizontalStyles.right} />
            <div style={horizontalStyles.bottom} />
            {inventoryH.filter(x => x.type === 'item').map(item => <Item item={item} workOrders={workOrders} key={item._id} />)}
            <div style={horizontalStyles.content}>
              <div style={horizontalStyles.full}>
                <ContentBlocks
                  orientation='horizontal'
                  handleOpen={this.handleOpen}
                  inventory={inventoryH}
                  SARs={SARs}
                  DARs={DARs}
                  OCRs={OCRs}
                  roomDetails={roomDetails}
                  workOrders={workOrders}
                  alerts={alerts}
                  hazards={hazards}
                  tasks={tasks}
                  researchOpen={researchOpen}
                  roomOpen={roomOpen}
                  veterinaryOpen={veterinaryOpen}
                  husbandryOpen={husbandryOpen}
                  handleClose={this.handleClose}
                />
              </div>
            </div>
            <Fab color="primary" aria-label="Add" style={horizontalStyles.menuFab} onClick={this.menuOpen}>
              <MenuIcon style={horizontalStyles.icon} />
            </Fab>
            <Fab color="primary" aria-label="Add" style={horizontalStyles.fab} onClick={this.handleOpen('actionsOpen')}>
              <Add style={horizontalStyles.icon} />
            </Fab>
          </div >
        </Hidden>
        <Hidden lgUp>
          <div>
            <img style={verticalStyles.img} src={background_v} alt="room enlarged view" />
            <div style={verticalStyles.left} />
            <div style={verticalStyles.top} />
            <div style={verticalStyles.right} />
            <div style={verticalStyles.bottom} />
            {inventoryV.filter(x => x.type === 'item').map(item => <Item item={item} workOrders={workOrders} key={item._id} />)}
            <div style={verticalStyles.content}>
              <div style={verticalStyles.full}>
                <ContentBlocks
                  orientation='vertical'
                  handleOpen={this.handleOpen}
                  inventory={inventoryV}
                  SARs={SARs}
                  DARs={DARs}
                  OCRs={OCRs}
                  roomDetails={roomDetails}
                  workOrders={workOrders}
                  alerts={alerts}
                  hazards={hazards}
                  tasks={tasks}
                  researchOpen={researchOpen}
                  roomOpen={roomOpen}
                  veterinaryOpen={veterinaryOpen}
                  husbandryOpen={husbandryOpen}
                  handleClose={this.handleClose}
                />
              </div>
            </div>
            <Fab color="primary" aria-label="Add" style={verticalStyles.menuFab} onClick={this.menuOpen}>
              <MenuIcon style={horizontalStyles.icon} />
            </Fab>
            <Fab color="primary" aria-label="Add" style={verticalStyles.fab} onClick={this.handleOpen('actionsOpen')}>
              <Add style={horizontalStyles.icon} />
            </Fab>
          </div >
        </Hidden> */}
      </MuiThemeProvider>
    );
  }
}

console.log('***', theme.breakpoints.only('ipad_v'), '***')
const styles = {
  ipad: {
    height: 500,
    width: 500,
    backgroundColor: 'red'
    // [theme.breakpoints.only('ipad_h')]: {
    //   '@media screen and (orientation:landscape)': {
    //     backfroundColor: 'blue'
    //   },
    //   '@media screen and (orientation:portrait)': {
    //     backfroundColor: 'yellow'
    //   }
    // },
    // [theme.breakpoints.only('pro_h')]: {
    //   backgroundColor: 'green',
    // },
  },
}

const verticalStyles = {
  img: {
    zIndex: 100,
    position: 'relative',
    height: '100%',
    width: '100%'
  },
  fab: {
    position: 'fixed',
    top: 935,
    left: 690,
    zIndex: 1000,
  },
  menuFab: {
    position: 'fixed',
    top: 935,
    left: 615,
    zIndex: 1000,
  },
  left: {
    height: 47,
    width: 768,
    display: 'inline-block',
    opacity: .5,
    // backgroundColor: 'blue',
    position: 'absolute',
    zIndex: 900
  },
  top: {
    width: 55,
    height: 920,
    left: 720,
    top: 55,
    display: 'inline-block',
    position: 'absolute',
    zIndex: 900,
    // backgroundColor: 'red',
    opacity: .5,
  },
  bottom: {
    width: 55,
    height: 920,
    top: 55,
    display: 'inline-block',
    position: 'absolute',
    zIndex: 900,
    // backgroundColor: 'yellow',
    opacity: .5,
  },
  right: {
    height: 42,
    width: 768,
    top: 975,
    display: 'inline-block',
    opacity: .5,
    // backgroundColor: 'green',
    position: 'absolute',
    zIndex: 900
  },
  content: {
    position: 'absolute',
    top: 55,
    left: 75,
    width: 630,
    height: 917,
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

const horizontalStyles = {
  img: {
    zIndex: 100,
    position: 'absolute',
    // height: '100%',
    width: '100%'
  },
  fab: {
    position: 'fixed',
    top: 690,
    left: 950,
    zIndex: 1000,
  },
  menuFab: {
    position: 'fixed',
    top: 690,
    left: 875,
    zIndex: 1000,
  },
  left: {
    width: 47,
    height: 768,
    display: 'inline-block',
    opacity: .5,
    // backgroundColor: 'blue',
    position: 'absolute',
    zIndex: 900
  },
  top: {
    height: 68,
    width: 920,
    left: 55,
    display: 'inline-block',
    position: 'absolute',
    zIndex: 900,
    // backgroundColor: 'red',
    opacity: .5,
  },
  bottom: {
    height: 55,
    width: 920,
    left: 55,
    top: 720,
    display: 'inline-block',
    position: 'absolute',
    zIndex: 900,
    // backgroundColor: 'yellow',
    opacity: .5,
  },
  right: {
    width: 42,
    left: 975,
    height: 768,
    display: 'inline-block',
    opacity: .5,
    // backgroundColor: 'green',
    position: 'absolute',
    zIndex: 900
  },
  content: {
    position: 'absolute',
    top: 75,
    left: 55,
    height: 630,
    width: 917,
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

export default withStyles(styles)(App)

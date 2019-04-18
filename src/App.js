import React, { Component } from 'react';
import './App.css';
import { Fab, Hidden } from '@material-ui/core'
import { Add } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu'
import ActionsDialog from './components/actions/ActionsDialog';
import ReportActionsDialog from './components/actions/ReportActionsDialog';
import NoticeActionsDialog from './components/actions/NoticeActionsDialog';
import SAR from './components/actions/reports/SAR';
import DAR from './components/actions/reports/DAR';
import OCR from './components/actions/reports/OCR';
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
import seed from './seed'
import Item from './components/room/inventory/Item'
import ReportsList from './components/room/ongoing/ReportsList'
import background_ipad_l from './static/B1451_h_ipad_6th.svg'
import background_ipad_p from './static/B1451_v_ipad_6th.svg'
import background_pro_p from './static/B1451_pro_p.svg'
import background_pro_l from './static/B1451_pro_l.svg'
import OrdersList from './components/room/ongoing/OrdersList';
import NoticesList from './components/actions/notices/NoticesList'
import ContentBlocks from './components/content/ContentBlocks'
import Menu from './components/actions/Menu'
import axios from "axios";

class App extends Component {

  constructor(props) {
    const { temperature, humidity, temps, humids, tempMoments, humidMoments } = seed;
    super(props);
    this.state = {
      temperature,
      humidity,
      temps,
      humids,
      tempMoments,
      humidMoments,
      envOpen: true,
      light: 'On',
      roomDetails: [
        { label: 'SPF Level', value: '2' },
        { label: 'Models', value: 'Mouse' },
        { label: 'Emergency Power', value: 'Available' },
      ],
      inventory: [],
      researchOpen: false,
      roomOpen: true,
      veterinaryOpen: false,
      husbandryOpen: false,
      orientation: window.scceen ? window.screen.orientation.type : window.orientation
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
    this.putDataToDB(name, data)
    const arr = Array.isArray(this.state[name]) ? this.state[name].slice(0) : [];
    arr.push(data)
    this.setState({ [name]: arr }, this.closeAll);
  }

  putDataToDB = (name, data) => {
    axios.post("https://nate-dev-brms-db.ngrok.io/api/putData", {
      name, data
    });
  };

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
      inventory,
      temperatureOpen,
      humidityOpen,
      temps,
      humids,
      tempMoments,
      humidMoments
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
        {temperatureOpen && <Temperature temps={temps} onClose={this.handleClose('temperatureOpen')} tempMoments={tempMoments} />}
        {humidityOpen && <Humidity values={humids} onClose={this.handleClose('humidityOpen')} humidMoments={humidMoments} />}
        {/** Layer three dialogs */}
        {SAROpen && <SAR open={SAROpen} onClose={this.handleClose('SAROpen')} onSubmit={this.handleSubmit('SARs')} />}
        {DAROpen && <DAR open={DAROpen} onClose={this.handleClose('DAROpen')} onSubmit={this.handleSubmit('DARs')} />}
        {OCROpen && <OCR open={OCROpen} onClose={this.handleClose('OCROpen')} onSubmit={this.handleSubmit('OCRs')} />}
        {hazardOpen && <Hazard onClose={this.handleClose('hazardOpen')} onSubmit={this.handleSubmit('hazards')} />}
        {alertOpen && <Alert onClose={this.handleClose('alertOpen')} onSubmit={this.handleSubmit('alerts')} />}
        {taskOpen && <Task onClose={this.handleClose('taskOpen')} onSubmit={this.handleSubmit('tasks')} />}
        {lightOpen && <LightSchedule onClose={this.handleClose('lightOpen')} onSubmit={this.handleSubmit('workOrders')} />}
        {maintenanceOpen && <Maintenance onClose={this.handleClose('maintenanceOpen')} onSubmit={this.handleSubmit('workOrders')} inventory={inventory} />}
      </div>
    )

  }

  getOrientation = () => {
    const { orientation } = this.state
    if (typeof orientation === 'string') {
      return orientation.includes('landscape') ? 'landscape' : 'portrait'
    }
    return (orientation === 90 || orientation === -90) ? 'landscape' : 'portrait'
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

  componentDidMount = () => {
    let self = this;
    window.addEventListener("orientationchange", function () {
      // Announce the new orientation number
      self.setState({ orientation: window.scceen ? window.screen.orientation.type : window.orientation });
      // App.setState({ orientation: window.screen.orientation.type });
    }, false);
    /** seed database */
    // seed.SARs.forEach(x => {
    //   this.putDataToDB('SARs', x)
    // })
    // seed.DARs.forEach(x => {
    //   this.putDataToDB('DARs', x)
    // })
    // seed.OCRs.forEach(x => {
    //   this.putDataToDB('OCRs', x)
    // })
    // seed.workOrders.forEach(x => {
    //   this.putDataToDB('workOrders', x)
    // })
    // seed.alerts.forEach(x => {
    //   this.putDataToDB('alerts', x)
    // })
    // seed.hazards.forEach(x => {
    //   this.putDataToDB('hazards', x)
    // })
    // seed.tasks.forEach(x => {
    //   this.putDataToDB('tasks', x)
    // })
    // seed.inventory.forEach(x => {
    //   this.putDataToDB('inventory', x)
    // })
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  gradient = direction => {
    return `linear-gradient(to ${direction}, rgba(255,255,255,0), rgba(255,255,255,1))`
  }

  // seedDatabase = () => {
  //   seed.SARs.forEach(x => {
  //     this.putDataToDB('SARs', x)
  //   })
  //   seed.DARs.forEach(x => {
  //     this.putDataToDB('DARs', x)
  //   })
  //   seed.OCRs.forEach(x => {
  //     this.putDataToDB('OCRs', x)
  //   })
  //   seed.workOrders.forEach(x => {
  //     this.putDataToDB('workOrders', x)
  //   })
  //   seed.alerts.forEach(x => {
  //     this.putDataToDB('alerts', x)
  //   })
  //   seed.hazards.forEach(x => {
  //     this.putDataToDB('hazards', x)
  //   })
  //   seed.tasks.forEach(x => {
  //     this.putDataToDB('tasks', x)
  //   })
  //   seed.inventory.forEach(x => {
  //     this.putDataToDB('inventory', x)
  //   })
  // }

  getDataFromDb = () => {
    const self = this;
    fetch("https://nate-dev-brms-db.ngrok.io/api/getData")
      .then(data => data.json())
      .then(res => {
        const data = res.data;
        const SARs = data.filter(x => x.name === 'SARs').map(x => x.data)
        const DARs = data.filter(x => x.name === 'DARs').map(x => x.data)
        const OCRs = data.filter(x => x.name === 'OCRs').map(x => x.data)
        const tasks = data.filter(x => x.name === 'tasks').map(x => x.data)
        const hazards = data.filter(x => x.name === 'hazards').map(x => x.data)
        const alerts = data.filter(x => x.name === 'alerts').map(x => x.data)
        const workOrders = data.filter(x => x.name === 'workOrders').map(x => x.data)
        const inventory = data.filter(x => x.name === 'inventory').map(x => x.data)
        // if (inventory.length < 1) {
        //   // self.seedDatabase()
        // }
        this.setState({ SARs, DARs, OCRs, tasks, hazards, alerts, workOrders, inventory })
      });
  };

  render() {
    const {
      workOrders,
      inventory,
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
      temperature,
      humidity,
      hallOpen,
      B1447Open,
      B1453Open,
      B1498Open,
      light
    } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ margin: '0px auto' }}>
          {this.renderDialogs()}
          <Menu
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
          <Hidden smUp>
            <div onMouseEnter={this.handleOpen('hallOpen')} onMouseLeave={this.handleClose('hallOpen')} style={{ ...styles.hall.ipad_p, backgroundImage: hallOpen ? null : this.gradient('bottom') }} />
            <div onMouseEnter={this.handleOpen('B1447Open')} onMouseLeave={this.handleClose('B1447Open')} style={{ ...styles.B1447.ipad_p, backgroundImage: B1447Open ? null : this.gradient('left') }} />
            <div onMouseEnter={this.handleOpen('B1453Open')} onMouseLeave={this.handleClose('B1453Open')} style={{ ...styles.B1453.ipad_p, backgroundImage: B1453Open ? null : this.gradient('right') }} />
            <div onMouseEnter={this.handleOpen('B1498Open')} onMouseLeave={this.handleClose('B1498Open')} style={{ ...styles.B1498.ipad_p, backgroundImage: B1498Open ? null : this.gradient('top') }} />
            <img style={styles.img.ipad_p} src={background_ipad_p} alt="room enlarged view" />
            <div>
              {inventory.filter(x => x.type === 'item').map(item => <Item item={item} workOrders={workOrders} key={item._id} styleKey="ipad_p" />)}
              <div style={styles.content.ipad_p}>
                <div style={styles.full}>
                  <ContentBlocks
                    light={light}
                    temperature={temperature}
                    humidity={humidity}
                    orientation='vertical'
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
                    researchOpen={researchOpen}
                    roomOpen={roomOpen}
                    veterinaryOpen={veterinaryOpen}
                    husbandryOpen={husbandryOpen}
                    handleClose={this.handleClose}
                  />
                </div>
              </div>
              <Fab color="primary" aria-label="Add" style={styles.menuFab.ipad_p} onClick={this.menuOpen}>
                <MenuIcon />
              </Fab>
              <Fab color="primary" aria-label="Add" style={styles.fab.ipad_p} onClick={this.handleOpen('actionsOpen')}>
                <Add />
              </Fab>
            </div>
          </Hidden>
          <Hidden mdUp xsDown>{this.getOrientation() === 'landscape' ? (
            <div>
              <div onMouseEnter={this.handleOpen('hallOpen')} onMouseLeave={this.handleClose('hallOpen')} style={{ ...styles.hall.ipad_l, backgroundImage: hallOpen ? null : this.gradient('right') }} />
              <div onMouseEnter={this.handleOpen('B1447Open')} onMouseLeave={this.handleClose('B1447Open')} style={{ ...styles.B1447.ipad_l, backgroundImage: B1447Open ? null : this.gradient('bottom') }} />
              <div onMouseEnter={this.handleOpen('B1453Open')} onMouseLeave={this.handleClose('B1453Open')} style={{ ...styles.B1453.ipad_l, backgroundImage: B1453Open ? null : this.gradient('top') }} />
              <div onMouseEnter={this.handleOpen('B1498Open')} onMouseLeave={this.handleClose('B1498Open')} style={{ ...styles.B1498.ipad_l, backgroundImage: B1498Open ? null : this.gradient('left') }} />
              <img style={styles.img.ipad_l} src={background_ipad_l} alt="room enlarged view" />
              {inventory.filter(x => x.type === 'item').map(item => <Item item={item} workOrders={workOrders} key={item._id} styleKey="ipad_l" />)}
              <div style={styles.content.ipad_l}>
                <div style={styles.full}>
                  <ContentBlocks
                    light={light}
                    temperature={temperature}
                    humidity={humidity}
                    orientation='horizontal'
                    handleOpen={this.handleOpen}
                    inventory={inventory}
                    true SARs={SARs}
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
              <Fab color="primary" aria-label="Add" style={styles.menuFab.ipad_l} onClick={this.menuOpen}>
                <MenuIcon />
              </Fab>
              <Fab color="primary" aria-label="Add" style={styles.fab.ipad_l} onClick={this.handleOpen('actionsOpen')}>
                <Add />
              </Fab>
            </div>
          ) : (
              <div>
                <div onMouseEnter={this.handleOpen('hallOpen')} onMouseLeave={this.handleClose('hallOpen')} style={{ ...styles.hall.pro_p, backgroundImage: hallOpen ? null : this.gradient('bottom') }} />
                <div onMouseEnter={this.handleOpen('B1447Open')} onMouseLeave={this.handleClose('B1447Open')} style={{ ...styles.B1447.pro_p, backgroundImage: B1447Open ? null : this.gradient('left') }} />
                <div onMouseEnter={this.handleOpen('B1453Open')} onMouseLeave={this.handleClose('B1453Open')} style={{ ...styles.B1453.pro_p, backgroundImage: B1453Open ? null : this.gradient('right') }} />
                <div onMouseEnter={this.handleOpen('B1498Open')} onMouseLeave={this.handleClose('B1498Open')} style={{ ...styles.B1498.pro_p, backgroundImage: B1498Open ? null : this.gradient('top') }} />
                <img style={styles.img.pro_p} src={background_pro_p} alt="room enlarged view" />
                {inventory.filter(x => x.type === 'item').map(item => <Item item={item} workOrders={workOrders} key={item._id} styleKey="pro_p" />)}
                <div style={styles.content.pro_p}>
                  <div style={styles.full}>
                    <ContentBlocks
                      light={light}
                      temperature={temperature}
                      humidity={humidity}
                      orientation='vertical'
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
                      researchOpen={researchOpen}
                      roomOpen={roomOpen}
                      veterinaryOpen={veterinaryOpen}
                      husbandryOpen={husbandryOpen}
                      handleClose={this.handleClose}
                    />
                  </div>
                </div>
                <Fab color="primary" aria-label="Add" style={styles.menuFab.pro_p} onClick={this.menuOpen}>
                  <MenuIcon />
                </Fab>
                <Fab color="primary" aria-label="Add" style={styles.fab.pro_p} onClick={this.handleOpen('actionsOpen')}>
                  <Add />
                </Fab>
              </div>
            )}</Hidden>
          <Hidden smDown>
            <div onMouseEnter={this.handleOpen('hallOpen')} onMouseLeave={this.handleClose('hallOpen')} style={{ ...styles.hall.pro_l, backgroundImage: hallOpen ? null : this.gradient('right') }} />
            <div onMouseEnter={this.handleOpen('B1447Open')} onMouseLeave={this.handleClose('B1447Open')} style={{ ...styles.B1447.pro_l, backgroundImage: B1447Open ? null : this.gradient('bottom') }} />
            <div onMouseEnter={this.handleOpen('B1453Open')} onMouseLeave={this.handleClose('B1453Open')} style={{ ...styles.B1453.pro_l, backgroundImage: B1453Open ? null : this.gradient('top') }} />
            <div onMouseEnter={this.handleOpen('B1498Open')} onMouseLeave={this.handleClose('B1498Open')} style={{ ...styles.B1498.pro_l, backgroundImage: B1498Open ? null : this.gradient('left') }} />
            <img style={styles.img.pro_l} src={background_pro_l} alt="room enlarged view" />
            {inventory.filter(x => x.type === 'item').map(item => <Item item={item} workOrders={workOrders} key={item._id} styleKey="pro_l" />)}
            <div style={styles.content.pro_l}>
              <div style={styles.full}>
                <ContentBlocks
                  light={light}
                  temperature={temperature}
                  humidity={humidity}
                  orientation='horizontal'
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
                  researchOpen={researchOpen}
                  roomOpen={roomOpen}
                  veterinaryOpen={veterinaryOpen}
                  husbandryOpen={husbandryOpen}
                  handleClose={this.handleClose}
                />
              </div>
            </div>
            <Fab color="primary" aria-label="Add" style={styles.menuFab.pro_l} onClick={this.menuOpen}>
              <MenuIcon />
            </Fab>
            <Fab color="primary" aria-label="Add" style={styles.fab.pro_l} onClick={this.handleOpen('actionsOpen')}>
              <Add />
            </Fab>
          </Hidden>
          {/* <Hidden lgDown><p>desktop</p></Hidden> */}
        </div>
      </MuiThemeProvider >
    );
  }
}

const styles = {
  img: {
    ipad_p: {
      zIndex: 100,
      position: 'absolute',
      width: 752
    },
    ipad_l: {
      zIndex: 100,
      position: 'absolute',
      width: 1024
    },
    pro_p: {
      zIndex: 100,
      position: 'absolute',
      width: 1024
    },
    pro_l: {
      zIndex: 100,
      position: 'absolute',
      width: 1366
    },
  },
  content: {
    ipad_p: {
      position: 'absolute',
      top: 50,
      left: 68,
      width: 630,
      height: 900,
    },
    ipad_l: {
      position: 'absolute',
      top: 75,
      left: 55,
      height: 630,
      width: 917,
    },
    pro_p: {
      position: 'absolute',
      top: 65,
      left: 95,
      width: 850,
      height: 1243,
    },
    pro_l: {
      position: 'absolute',
      top: 95,
      left: 65,
      height: 850,
      width: 1243,
    },
    desktop: {}
  },
  fab: {
    ipad_p: {
      position: 'absolute',
      top: 935,
      left: 690,
      zIndex: 1000,
    },
    ipad_l: {
      position: 'absolute',
      top: 690,
      left: 950,
      zIndex: 1000,
    },
    pro_p: {
      position: 'absolute',
      top: 1275,
      left: 930,
      zIndex: 1000,
    },
    pro_l: {
      position: 'absolute',
      top: 945,
      left: 1275,
      zIndex: 1000,
    },
    desktop: {}
  },
  menuFab: {
    ipad_p: {
      position: 'absolute',
      top: 935,
      left: 615,
      zIndex: 1000,
    },
    ipad_l: {
      position: 'absolute',
      top: 690,
      left: 875,
      zIndex: 1000,
    },
    pro_p: {
      position: 'absolute',
      top: 1275,
      left: 855,
      zIndex: 1000,
    },
    pro_l: {
      position: 'absolute',
      top: 945,
      left: 1200,
      zIndex: 1000,
    },
    desktop: {}
  },
  // commented directions referr to position when hallway is on the bottom (portrait)
  // bottom
  hall: {
    ipad_p: {
      height: 42,
      width: 752,
      top: 952,
      display: 'inline-block',
      // backgroundColor: 'green',
      position: 'absolute',
      zIndex: 900,
    },
    ipad_l: {
      width: 42,
      left: 972,
      height: 768,
      display: 'inline-block',
      // backgroundColor: 'green',
      position: 'absolute',
      zIndex: 900,
    },
    pro_p: {
      height: 55,
      width: 1024,
      top: 1300,
      display: 'inline-block',
      // backgroundColor: 'green',
      position: 'absolute',
      zIndex: 900,
    },
    pro_l: {
      width: 55,
      left: 1305,
      height: 1024,
      display: 'inline-block',
      position: 'absolute',
      // backgroundColor: 'green',
      zIndex: 1100,
    },
    desktop: {}
  },
  // right
  B1453: {
    ipad_p: {
      width: 53,
      height: 925,
      left: 708,
      top: 42,
      display: 'inline-block',
      position: 'absolute',
      zIndex: 900,
      // backgroundColor: 'red',
    },
    ipad_l: {
      height: 68,
      width: 942,
      left: 43,
      display: 'inline-block',
      position: 'absolute',
      zIndex: 900,
      // backgroundColor: 'red',
    },
    pro_p: {
      width: 93,
      height: 1270,
      left: 942,
      top: 55,
      display: 'inline-block',
      position: 'absolute',
      zIndex: 900,
      // backgroundColor: 'red',
    },
    pro_l: {
      height: 90,
      width: 1268,
      left: 55,
      display: 'inline-block',
      position: 'absolute',
      zIndex: 900,
      // backgroundColor: 'red',
    },
    desktop: {}
  },
  // left
  B1447: {
    ipad_p: {
      width: 55,
      height: 924,
      top: 42,
      display: 'inline-block',
      position: 'absolute',
      zIndex: 901,
      // backgroundColor: 'yellow',
    },
    ipad_l: {
      height: 60,
      width: 943,
      left: 42,
      top: 720,
      display: 'inline-block',
      position: 'absolute',
      zIndex: 900,
      // backgroundColor: 'yellow',
    },
    pro_p: {
      width: 75,
      height: 1268,
      top: 55,
      display: 'inline-block',
      position: 'absolute',
      zIndex: 901,
      // backgroundColor: 'yellow',
    },
    pro_l: {
      height: 95,
      width: 1268,
      left: 55,
      top: 940,
      display: 'inline-block',
      position: 'absolute',
      zIndex: 900,
      // backgroundColor: 'yellow',
    },
    desktop: {}
  },
  // top
  B1498: {
    ipad_p: {
      height: 47,
      width: 752,
      display: 'inline-block',
      // backgroundColor: 'blue',
      position: 'absolute',
      zIndex: 900,
    },
    ipad_l: {
      width: 47,
      height: 768,
      display: 'inline-block',
      // backgroundColor: 'blue',
      position: 'absolute',
      zIndex: 900,
    },
    pro_p: {
      height: 60,
      width: 1024,
      display: 'inline-block',
      // backgroundColor: 'blue',
      position: 'absolute',
      zIndex: 900,
    },
    pro_l: {
      width: 57,
      height: 1024,
      display: 'inline-block',
      // backgroundColor: 'blue',
      position: 'absolute',
      zIndex: 900,
    },
    desktop: {}
  },
  full: {
    height: '100%',
    width: '100%'
  },
}


export default App

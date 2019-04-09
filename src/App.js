import React, { Component } from 'react';
import './App.css';
import { Fab, IconButton, Badge } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Add, Assignment } from '@material-ui/icons';
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
import { generateHumidData, generateTempData } from './helpers'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      envOpen: true,
      SARs: [],
      DARs: [],
      OCRs: [],
      hazards: [],
      alerts: [],
      tasks: [],
      temps: generateTempData(),
      humids: generateHumidData(),
      taskOpen: true
    }
  }

  handleOpen = name => () => {
    this.setState({ [name]: true });
  }

  handleClose = name => () => {
    this.setState({ [name]: false });
  }

  totalReports = () => {
    const { OCRs, SARs, DARs } = this.state;
    return OCRs.length + SARs.length + DARs.length
  }

  closeAll = () => {
    this.setState({
      actionsOpen: false,
      reportOpen: false,
      noticeOpen: false,
      SAROpen: false,
      DAROpen: false,
      OCROpen: false,
      reportsListOpen: false,
      temperatureOpen: false,
      hazardOpen: false,
      alertOpen: false,
      taskOpen: false
    });
  }

  handleSubmit = name => report => {
    const reports = this.state[name].slice(0);
    reports.push(report)
    this.setState({ [name]: reports }, this.closeAll);
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
      tasks
    } = this.state;
    const numReports = this.totalReports();
    console.log('tasks: ', tasks)
    return (
      <div className="App" style={styles({ spacing: {} }).root}>
        {numReports > 0 && (
          <IconButton aria-label={`${numReports} Unresolved Reports`}>
            <Badge badgeContent={numReports} color="primary">
              <Assignment />
            </Badge>
          </IconButton>
        )}
        {/** Layer one dialogs */}
        {actionsOpen && <ActionsDialog open={actionsOpen} onClose={this.handleClose('actionsOpen')} handleOpen={this.handleOpen} />}
        {envOpen && <EnvOverview
          temperature={temps[temps.length - 1]}
          humidity={humids[humids.length - 1]}
          handleOpen={this.handleOpen}
          onClose={this.handleClose('envOpen')}
        />} {/** not really a dialog but it's similar */}

        {/** Layer two dialogs */}
        {reportOpen && <ReportActionsDialog open={reportOpen} onClose={this.handleClose('reportOpen')} handleOpen={this.handleOpen} />}
        {noticeOpen && <NoticeActionsDialog open={noticeOpen} onClose={this.handleClose('noticeOpen')} handleOpen={this.handleOpen} />}
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
        {/** End dialogs */}
        <Fab color="primary" aria-label="Add" className={classes.fab}>
          <Add onClick={this.handleOpen('actionsOpen')} />
        </Fab>

      </div >
    );
  }
}

const styles = theme => ({
  root: {
    height: '80vh',
    backgroundColor: 'gray'
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

import React, { Component } from 'react';
import './App.css';
import { Fab, IconButton, Badge } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Add, Assignment } from '@material-ui/icons';
import ActionsDialog from './components/actions/ActionsDialog';
import ReportActionsDialog from './components/actions/ReportActionsDialog';
import SAR from './components/reports/SAR';
import DAR from './components/reports/DAR';
import OCR from './components/reports/OCR';
import EnvOverview from './components/environment/EnvOverview'
import Temperature from './components/environment/time-series/Temperature'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionsOpen: false,
      reportOpen: false,
      SAROpen: false,
      SARs: [],
      DAROpen: false,
      DARs: [],
      OCROpen: false,
      OCRs: [],
      reportsListOpen: false
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
      SAROpen: false,
      DAROpen: false,
      OCROpen: false,
      reportsListOpen: false
    });
  }

  handleSubmit = name => report => {
    const reports = this.state[name].slice(0);
    reports.push(report)
    this.setState({ [name]: reports }, this.closeAll);
  }

  render() {
    const { classes } = this.props;
    const { actionsOpen, reportOpen, SAROpen, DAROpen, OCROpen, OCRs } = this.state;
    const numReports = this.totalReports();
    console.log('reports: ', OCRs)
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
        <EnvOverview /> {/** not really a dialog but it's similar */}

        {/** Layer two dialogs */}
        {reportOpen && <ReportActionsDialog open={reportOpen} onClose={this.handleClose('reportOpen')} handleOpen={this.handleOpen} />}
        <Temperature />
        {/** Layer three dialogs */}
        {SAROpen && <SAR open={SAROpen} onClose={this.handleClose('SAROpen')} onSubmit={this.handleSubmit('SARs')} />}
        {DAROpen && <DAR open={DAROpen} onClose={this.handleClose('DAROpen')} onSubmit={this.handleSubmit('DARs')} />}
        {OCROpen && <OCR open={OCROpen} onClose={this.handleClose('OCROpen')} onSubmit={this.handleSubmit('OCRs')} />}
        {/** End dialogs */}
        <Fab color="primary" aria-label="Add" className={classes.fab}>
          <Add onClick={this.handleOpen('actionsOpen')} />
        </Fab>

      </div>
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
});

export default withStyles(styles)(App);

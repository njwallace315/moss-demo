import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import _ from 'lodash'
import moment from 'moment'
import ReportItem from '../room/ongoing/ReportItem'


class DARContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openReport: null,
        }
    }

    handleOpen = (openReport) => () => {
        this.setState({ openReport });
    }

    handleClose = () => {
        this.setState({ openReport: null });
    }
    render() {
        const { classes, DARs } = this.props;
        const { openReport } = this.state;
        return (
            <div>
                {openReport && <ReportItem report={openReport} type={'DAR'} onClose={this.handleClose} />}
                <List className={classes.list}>
                    {DARs.map(x => {
                        return (
                            <ListItem button onClick={this.handleOpen(x)} className={classes.listItem}>
                                <Typography className={classes.inlineLabel} variant="subheading">
                                    <em>Dead Animal</em>:&nbsp;
                                </Typography>
                                <Typography className={classes.inline}>
                                    {x.protocol} - {moment(x.dateFound).format('hh:mm a MM/DD/YYYY')}
                                </Typography>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        );
    }
};

DARContent.propTypes = {
    inventory: PropTypes.array,
    handleOpen: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    DARs: PropTypes.array,
};

DARContent.defaultProps = {
    DARs: []
}

const styles = {
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    inline: {
        display: 'inline',
        fontSize: '1.1em'
    },
    inlineLabel: {
        display: 'inline',
        fontWeight: 'bold',
        textDecoration: 'italics'
    },
    timeline: {
        display: 'inline-block',
        float: 'right',
        padding: '0px 5px',
        height: '100%',
        color: '#000'
    },
    row: {
        display: 'block'
    },
    listItem: {
        padding: '0px 16px'
    },
    list: {
        padding: 0
    }
};

export default withStyles(styles)(DARContent);
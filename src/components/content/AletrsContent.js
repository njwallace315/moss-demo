import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import NoticeItem from '../room/ongoing/NoticeItem'


class AlertsContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openAlert: null,
        }
    }

    handleOpen = (openAlert) => () => {
        this.setState({ openAlert });
    }

    handleClose = () => {
        this.setState({ openAlert: null });
    }
    render() {
        const { classes, alerts } = this.props;
        const { openAlert } = this.state;
        return (
            <div>
                {openAlert && <NoticeItem notice={openAlert} type="alert" onClose={this.handleClose} />}
                <List className={classes.list}>
                    {alerts.map(x => {
                        return (
                            <ListItem button onClick={this.handleOpen(x)} className={classes.listItem}>
                                <Typography className={classes.inlineLabel} variant="subheading">
                                    <em>Alert</em>:&nbsp;
                                </Typography>
                                <Typography className={classes.inline}>
                                    {x.subject}
                                </Typography>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        );
    }
};

AlertsContent.propTypes = {
    classes: PropTypes.object.isRequired,
    alerts: PropTypes.array,
};

AlertsContent.defaultProps = {
    alerts: []
}

const styles = {
    inline: {
        display: 'inline',
        fontSize: '1.1em'
    },
    inlineLabel: {
        display: 'inline',
        fontWeight: 'bold',
        textDecoration: 'italics'
    },
    listItem: {
        padding: '0px 16px'
    },
    list: {
        padding: 0
    }
};

export default withStyles(styles)(AlertsContent);
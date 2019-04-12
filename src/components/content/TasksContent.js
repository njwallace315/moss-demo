import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import NoticeItem from '../room/ongoing/NoticeItem'


class TasksContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openTask: null,
        }
    }

    handleOpen = (openTask) => () => {
        this.setState({ openTask });
    }

    handleClose = () => {
        this.setState({ openTask: null });
    }
    render() {
        const { classes, tasks } = this.props;
        const { openTask } = this.state;
        return (
            <div>
                {openTask && <NoticeItem notice={openTask} type="task" onClose={this.handleClose} />}
                <List className={classes.list}>
                    {tasks.map(x => {
                        return (
                            <ListItem button onClick={this.handleOpen(x)} className={classes.listItem}>
                                <Typography className={classes.inlineLabel} variant="subheading">
                                    <em>Task</em>:&nbsp;
                                </Typography>
                                <Typography className={classes.inline}>
                                    <span className={classes.priority}>{x.priority} priority</span> - {x.taskName}
                                </Typography>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        );
    }
};

TasksContent.propTypes = {
    classes: PropTypes.object.isRequired,
    tasks: PropTypes.array,
};

TasksContent.defaultProps = {
    tasks: []
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

export default withStyles(styles)(TasksContent);
import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import NoticeItem from '../room/ongoing/NoticeItem'


class HazardsContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openHazard: null,
        }
    }

    handleOpen = (openHazard) => () => {
        this.setState({ openHazard });
    }

    handleClose = () => {
        this.setState({ openHazard: null });
    }
    render() {
        const { classes, hazards } = this.props;
        const { openHazard } = this.state;
        return (
            <div>
                {openHazard && <NoticeItem notice={openHazard} type="hazard" onClose={this.handleClose} />}
                <List className={classes.list}>
                    {hazards.map(x => {
                        return (
                            <ListItem button onClick={this.handleOpen(x)} className={classes.listItem}>
                                <Typography className={classes.inlineLabel} variant="subheading">
                                    <em>Hazard</em>:&nbsp;
                                </Typography>
                                <Typography className={classes.inline}>
                                    {x.agent}
                                </Typography>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        );
    }
};

HazardsContent.propTypes = {
    classes: PropTypes.object.isRequired,
    hazards: PropTypes.array,
};

HazardsContent.defaultProps = {
    hazards: []
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

export default withStyles(styles)(HazardsContent);
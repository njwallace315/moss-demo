import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, IconButton, CardHeader, CardContent, Divider, Typography } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import EnvContent from './EnvContent'
import InventoryContent from './InventoryContent'
import SARContent from './SARContent'
import DARContent from './DARContent'
import OCRContent from './OCRContent';
import RoomDetailsContent from './RoomDetailsContent'
import OrdersContent from './OrdersContent';

const ContentBlocks = ({ classes, handleOpen, inventory, SARs, OCRs, DARs, roomDetails, workOrders }) => {
    return (
        <Grid container justify="space-between" className={classes.full}>
            <Grid item xs={6} className={classes.item}>
                <Card className={classes.card}>
                    <CardHeader
                        className={classes.heading}
                        action={
                            <IconButton>
                                <MoreVert />
                            </IconButton>
                        }
                        title="Room"
                    />
                    <CardContent className={classes.content}>

                        {workOrders && workOrders.length > 0 && (
                            <div>
                                <Divider />
                                <Typography variant="h6" className={classes.center}>Open Orders</Typography>
                                <OrdersContent orders={workOrders} />
                                <Divider />
                            </div>
                        )}
                        <EnvContent handleOpen={handleOpen} />
                        <InventoryContent inventory={inventory} />
                        <RoomDetailsContent roomDetails={roomDetails} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Card className={classes.card}>
                    <CardHeader
                        className={classes.heading}
                        action={
                            <IconButton>
                                <MoreVert />
                            </IconButton>
                        }
                        title="Research"
                    />
                    <CardContent className={classes.content}>
                        <DARContent DARs={DARs} />
                        <OCRContent OCRs={OCRs} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Card className={classes.card}>
                    <CardHeader
                        className={classes.heading}
                        action={
                            <IconButton>
                                <MoreVert />
                            </IconButton>
                        }
                        title="Husbandry"
                    />
                </Card>
            </Grid>
            <Grid item xs={6} className={classes.item}>
                <Card className={classes.card}>
                    <CardHeader
                        className={classes.heading}
                        action={
                            <IconButton>
                                <MoreVert />
                            </IconButton>
                        }
                        title="Veterinary"
                    />
                    <CardContent className={classes.content}>
                        <SARContent SARs={SARs} />
                    </CardContent>

                </Card>
            </Grid>
        </Grid>
    );
};

ContentBlocks.propTypes = {
    classes: PropTypes.object.isRequired,
    handleOpen: PropTypes.func.isRequired,
};

const styles = {
    full: {
        height: '100%',
        width: '100%'
    },
    item: {
        height: '50%',
        padding: 8
    },
    card: {
        height: '100%',
        width: '100%',
        opacity: .95,
        overflowY: 'scroll'
    },
    content: {
        padding: 0
    },
    heading: {
        padding: '8px 16px'
    },
    center: {
        textAlign: 'center'
    }
}

export default withStyles(styles)(ContentBlocks);
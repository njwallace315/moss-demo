import React from 'react';
import { IconButton, Menu, MenuItem, FormControlLabel, Checkbox } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

class ViewMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const {
            toggleResearch,
            toggleHusbandry,
            toggleRoom,
            toggleVet,
            researchOpen,
            roomOpen,
            veterinaryOpen,
            husbandryOpen,
            closeContent,
            openContent,
            anchorEl,
            onClose
        } = this.props;
        return (
            <div>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={onClose}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={roomOpen}
                                onChange={toggleRoom}
                                value="room"
                            />
                        }
                        label="Room"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={researchOpen}
                                onChange={toggleResearch}
                                value="research"
                            />
                        }
                        label="Research"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={husbandryOpen}
                                onChange={toggleHusbandry}
                                value="husbandry"
                            />
                        }
                        label="Husbandry"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={veterinaryOpen}
                                onChange={toggleVet}
                                value="veterinary"
                            />
                        }
                        label="Veterinary"
                    />
                    {(roomOpen || researchOpen || husbandryOpen || veterinaryOpen) && <MenuItem onClick={closeContent}>Close All Content</MenuItem>}
                    {(!roomOpen || !researchOpen || !husbandryOpen || !veterinaryOpen) && <MenuItem onClick={openContent}>Open All Content</MenuItem>}
                </Menu>
            </div>
        );
    }
}

const styles = theme => {

}

export default ViewMenu;
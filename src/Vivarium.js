import React from 'react';
import PropTypes from 'prop-types';
import floorplan from './static/floormap.svg'

const Vivarium = props => {
    return (
        <div>
            <img src={floorplan} style={{ display: 'block', height: '90%', width: '90%' }} />
        </div>
    );
};

Vivarium.propTypes = {

};

export default Vivarium;
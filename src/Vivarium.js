import React from 'react';
import PropTypes from 'prop-types';
import floorplan from './static/floormap.svg'
import { Link } from 'react-router-dom'

const Vivarium = props => {
    return (
        <div>
            <Link to="/B1451">
                <img src={floorplan} style={{ display: 'block', height: '90%', width: '90%' }} />
            </Link>
        </div>
    );
};

Vivarium.propTypes = {

};

export default Vivarium;
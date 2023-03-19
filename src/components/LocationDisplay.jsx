import React from 'react';
import {useLocation} from 'react-router-dom';

// const location = useLocation();
const LocationDisplay =()=>{
    const location = useLocation();

    return(
        <h4 data-testid="location-display">{location.pathname}</h4>
    )
}

export default LocationDisplay;
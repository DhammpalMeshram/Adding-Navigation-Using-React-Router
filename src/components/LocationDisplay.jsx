import React from 'react';
import {useLocation} from 'react-router-dom';

// const location = useLocation();
const LocationDisplay =()=>{
    const location = useLocation();

    return(
        <h1>{location.pathname}</h1>

    )
}

export default LocationDisplay;
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


const InitialMap = withScriptjs(withGoogleMap(props => {
    
    return (
        <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={14}
            defaultCenter={{ lat: 38.889931, lng: -77.0435 }}
        >
        </GoogleMap>
    )
}))



export default class MapContainer extends Component {
    
    render() {
        return (
            <div style={{height: '100%'}}>
                <InitialMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GKEY}&v=3.exp&libraries=places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `800px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
            >
            </div>
        )
    }
}
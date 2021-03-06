import React, { Component } from 'react';
import { compose, withProps } from "recompose";

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";

const MapWithAMarkerClusterer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDjHo8xThOAcIZhNP-6COLfJ2rEXXqvIvY&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `50%` }} />,
        containerElement: <div style={{ height: `40em` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props =>

    <GoogleMap
        defaultZoom={4}
        defaultCenter={{ lat: 50, lng: -100 }}
    >
        <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >

            {Object.values(props.markers).map((marker, index) => {

                return (
                    console.log(marker.lat),
                    <Marker
                        key={marker.id}
                        position={{
                            lat: parseInt(marker.lat,10),
                            lng: parseInt(marker.lng,10)
                        }}>


                        <InfoWindow
                            options={{ disableAutoPan: true }}
                            key={`${marker.id}_info`}
                        ><div>

                                <h3>{marker.place.toUpperCase()}</h3>
                                <div>{marker.country.toUpperCase()}</div>
                                <div>{marker.state}</div>
                                <div>{marker.city}</div>
                                <div>{marker.date.toUpperCase()}</div>

                            </div>
                        </InfoWindow>

                    </Marker>
                )
            })}
        </MarkerClusterer>
    </GoogleMap>
);

class Map extends Component {

    render() {
        console.log(this.props.filteredToursForMap)
        return (
            <MapWithAMarkerClusterer
                markers={this.props.filteredToursForMap}
            />
        )
    }
}


export default Map;


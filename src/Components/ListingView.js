import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
// import GoogleMap from "../Components/GoogleMap";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.267153,
      lng: -97.743057,
    },
    zoom: 11,
  };

  render() {
    return (
      
      // Important! Always set the container height explicitly
      <div style={{ height: "55vh", width: "55%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          // yesIWantToUseGoogleMapApiInternals
          // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        ></GoogleMapReact>
        {/* <GoogleMap /> */}
      </div>
    );
  }
}

export default SimpleMap;

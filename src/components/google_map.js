import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    // takes ref to html element to render the map to, and map params object
    // typical of integrating 3rd party libs with React
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    // this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;

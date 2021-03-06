import React from 'react'
import {Map as LeafletMap, TileLayer, Marker, Popup} from 'react-leaflet'
// import Leaflet from 'leaflet'

export class Map extends React.Component {
  constructor () {
    super()
    this.state = {
      lat: -36.7400,
      lng: 174.4224,
      zoom: 16
    }
  }

  render () {
    const position = [this.state.lat, this.state.lng]
    const woodhill = [-36.7400, 174.4224]
    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={woodhill}>
          <Popup>
            Woodhill trail head
          </Popup>
        </Marker>
      </LeafletMap>
    )
  }
}

// export class Map extends React.Component {
//   render () {
//     const mymap = Leaflet.map('mapid').setView([-36.7398007, 174.420835], 20)
//     Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//       maxZoom: 18,
//       id: 'mapbox.streets',
//       accessToken: 'pk.eyJ1IjoiZ3Vuc2xpbmdlcm56IiwiYSI6ImNqbDhtemkxejNrNzMzd2xtcGhubzF4cTMifQ.k6Pwum33ak-nDZTp-Y3SlQ'
//     }).addTo(mymap)

//     return (
//       <div className="mapid"></div>
//     )
//   }
// }

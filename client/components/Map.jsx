// import React from 'react'
// import ReactLeaflet from 'react-leaflet'
// // import Leaflet from 'leaflet'

// const {Map: LeafletMap, TileLayer, Marker, Popup} = ReactLeaflet

// export class Map extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       lat: 51.505,
//       lng: -0.09,
//       zoom: 13
//     }
//   }

//   render () {
//     const position = [this.state.lat, this.state.lng]
//     return (
//       <LeafletMap center={position} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br/> Easily customizable.
//           </Popup>
//         </Marker>
//       </LeafletMap>
//     )
//   }
// }

// // export class Map extends React.Component {
// //   render () {
// //     const mymap = Leaflet.map('mapid').setView([-36.7398007, 174.420835], 20)
// //     Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
// //       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
// //       maxZoom: 18,
// //       id: 'mapbox.streets',
// //       accessToken: 'pk.eyJ1IjoiZ3Vuc2xpbmdlcm56IiwiYSI6ImNqbDhtemkxejNrNzMzd2xtcGhubzF4cTMifQ.k6Pwum33ak-nDZTp-Y3SlQ'
// //     }).addTo(mymap)

// //     return (
// //       <div className="mapid"></div>
// //     )
// //   }
// // }

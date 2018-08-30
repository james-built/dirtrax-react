import React from 'react'
import Leaflet from 'leaflet'

var mymap = Leaflet.map('mapid').setView([-36.7398007, 174.420835], 20)
Leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiZ3Vuc2xpbmdlcm56IiwiYSI6ImNqbDhtemkxejNrNzMzd2xtcGhubzF4cTMifQ.k6Pwum33ak-nDZTp-Y3SlQ'
}).addTo(mymap)
export default class Navigation extends React.Component {
  render () {
    return (
      <div>
        <h1>Trail Map</h1>
        <div className="mapid"></div>
      </div>
    )
  }
}

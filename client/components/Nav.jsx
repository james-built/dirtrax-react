import React from 'react'
import {Map} from './Map'
import {Link} from 'react-router-dom'

export class Nav extends React.Component {
  render () {
    return (
      <div>
        <h1>Trail Map</h1>
        <Map />
        <Link to={'/'}><button>return home</button></Link>
      </div>
    )
  }
}

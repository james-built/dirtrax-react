import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>The Home Page</h1>
        <Link to={'/Nav'}><button>go to nav</button></Link>
      </div>
    )
  }
}

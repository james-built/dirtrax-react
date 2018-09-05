import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// Components
import {Home} from './Home'
import {Nav} from './Nav'
// import {Map} from './Map'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/Nav' component={Nav} />
      </div>
    </Router>
    // <div>
    //   <Map />
    // </div>
  )
}

export default App

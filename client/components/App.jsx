import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// Components
import {Home} from './Home'
import {Nav} from './Nav'

const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' component={Home} />
        <Route path='/Nav' component={Nav} />
      </div>
    </Router>
  )
}

export default App

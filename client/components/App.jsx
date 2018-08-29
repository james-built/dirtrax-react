import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

// Components
import Home from './Home'

const App = () => {

  return (
    <Router>
      <div>
        <Route path='/' component={Home} />
      </div>
    </Router>

  )
}

export default App


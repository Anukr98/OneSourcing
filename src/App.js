import React from 'react'
import { BrowserRouter as Router , Link , NavLink } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Login from './Routes/Login/Login'
import './index.css'

const App = () => {
  return (
    <Router>

      <Route path = '/' component = {Login} />
    </Router>
  )
}

export default App
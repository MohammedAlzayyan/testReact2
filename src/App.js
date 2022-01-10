import React, { Fragment } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/admin/MainLayout'
import Home from './components/frontend/Home'
// import Register from './components/frontend/auth/Register'
// import Login from './components/frontend/auth/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" exact element={<Home />} />
            {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
            <Route path="/admin/dashboard" element={<MainLayout />} />
            <Route path="/admin/profile" element={<MainLayout />} />
            <Route
              path="/admin"
              name="Admin"
              render={(props) => <MainLayout {...props} />}
            />
          </Routes>
        </Fragment>
      </Router>
    </div>
  )
}

export default App

import React, { Component, Fragment } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import '../../assests/admin/css/styles.css'
import '../../assests/admin/js/scripts'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

import routes from '../../routes/routes'

import Dashboard from '../../components/admin/Dashboard'
import Profile from '../../components/admin/Profile'

class MainLayout extends Component {
  render() {
    return (
      <Fragment>
        <div className="sb-nav-fixed">
          <Navbar />
          <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
              <Sidebar />
            </div>
            <div id="layoutSidenav_content">
              <main>
                {/* {console.log(routes.forEach((element) => console.log(element)))} */}
                {/* <Dashboard />
              <Profile /> */}
                <Routes>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={(props) => (
                          <route.component {...props.component} />
                        )}
                      />
                    ) : null
                  })}
                  <Navigate from="admin" to="/admin/dashboard" />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default MainLayout

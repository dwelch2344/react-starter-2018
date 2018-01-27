import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap'

import Login from './Login'

export const routes = [
  { path: '/',
    exact: true,
    label: 'Home',
    icon: "pe-7s-home",
    navigation: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  { path: '/login',
    exact: true,
    label: 'Login',
    icon: "pe-7s-lock",
    navigation: false,
    main: () => <Login/>
  },
  { path: '/bubblegum',
    label: 'Bubblegum',
    icon: "pe-7s-graph",
    navigation: true,
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  { path: '/shoelaces',
      label: 'Shoelaces',
      icon: "pe-7s-science",
      navigation: true,
      sidebar: () => <div>shoelaces!</div>,
      main: () => <h2>Shoelaces</h2>
  },
]


export const Sidebar = ({ account, history }) => {
  const path = history.location.pathname
  return (
    <div className="sidebar" data-color="red" data-image="assets/img/sidebar-5.jpg">
      <div className="sidebar-wrapper">
            <div className="logo">
                <a className="simple-text">
                    Admin
                </a>
            </div>
            { account && (
              <ul className="nav">
                  <li>
                      <Link to={'/home'}> 
                        <i className="pe-7s-graph"></i>
                        <p>Dashboard</p>
                      </Link>
                  </li>
                  <li className={ path.indexOf('/accounts') === 0 ? 'active' : ''}>
                      <Link to={'/accounts'}> 
                        <i className="pe-7s-user"></i>
                        <p>Accounts</p>
                      </Link>
                  </li>
                  <li>
                      <Link to={'/purchases'}> 
                        <i className="pe-7s-note2"></i>
                        <p>Purchases</p>
                      </Link>
                  </li>
                  {/* <li>
                      <a href="typography.html">
                          <i className="pe-7s-news-paper"></i>
                          <p>Typography</p>
                      </a>
                  </li>
                  <li>
                      <a href="icons.html">
                          <i className="pe-7s-science"></i>
                          <p>Icons</p>
                      </a>
                  </li> */}
                  {/* 
                  <li>
                      <a href="maps.html">
                          <i className="pe-7s-map-marker"></i>
                          <p>Maps</p>
                      </a>
                  </li>
                  <li>
                      <a href="notifications.html">
                          <i className="pe-7s-bell"></i>
                          <p>Notifications</p>
                      </a>
                  </li>
                  <li className="active-pro">
                      <a href="upgrade.html">
                          <i className="pe-7s-rocket"></i>
                          <p>Blast off?</p>
                      </a>
                  </li>
                  */}
              </ul>
            )}
            { !account && (
              <ul className="nav">
                <li>
                    <Link to={'/login'}> 
                        <i className="pe-7s-lock"></i>
                        <p>Login to get started</p>
                    </Link>
                </li>
              </ul>
            )}
            <ul className="nav">
              {routes.filter(r => r.navigation).map((route, index) => (
                <li key={index}>
                    <Link to={route.path}> 
                        <i className={route.icon}></i>
                        <p>{route.label}</p>
                    </Link>
                </li>
              ))}            
            </ul>
      </div>
    </div>
  )
}

export const AppNavBar = () => {
  return (
    <Navbar collapseOnSelect className="top-nav">
      <Navbar.Header>
        <Navbar.Brand>
          <a>Admin</a>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link Right</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppNavBar
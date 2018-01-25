import React from 'react'
import { Link } from 'react-router-dom'

export const routes = [
  { path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  { path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  { path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
]

const NavBar = () => (
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/bubblegum">Bubblegum</Link></li>
    <li><Link to="/shoelaces">Shoelaces</Link></li>
  </ul>
)
export default NavBar
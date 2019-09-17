import { Link } from "gatsby"
import React from "react"
import logo from '../images/logo-invision.png'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={logo} width="30"/></Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/login">Login</Link>
      <button>Buys</button>
    </div>
  </div>
)



export default Header

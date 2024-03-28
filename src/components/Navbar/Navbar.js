import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'
import { Button } from '../Button'

class Navbar extends Component {
  // Hamburger click code
  state = { clicked: false }
  handleClick = () => {
    // Once click, set state the opposite value of the click key which turn into true
    this.setState({ clicked: !this.state.clicked })
  }
  render(){
    return (
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>React&nbsp;<i className="fa-brands fa-react"></i></h1>
        <div className='menu-icon' onClick={this.handleClick}>
          {/* Wherein here, if clicked then x mark otherwise bars icon */}
          <i className={this.state.clicked ? 'fas fa-xmark' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {/* Loop through menu items and paste the content of each iteration to li tag */}
          {MenuItems.map((item, index) => {
            return (
              <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
            )
          })}
        </ul>
        <Button>Sign&nbsp;Up</Button>
      </nav>
    )
  }
}

export default Navbar
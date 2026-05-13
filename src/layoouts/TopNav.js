import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/TopNav.css';
import ImgLogo from '../images/logonavbar.png';

class TopNav extends Component {
  state = { mobileOpen: false };

  toggle = () => this.setState(s => ({ mobileOpen: !s.mobileOpen }));
  close = () => this.setState({ mobileOpen: false });

  render() {
    const { mobileOpen } = this.state;
    return (
      <div className="topnav">
        <div className="topnav__logo-bar">
          <NavLink exact to="/" className="topnav__brand-link" onClick={this.close}>
            <img src={ImgLogo} alt="Exquisite Foods" className="topnav__logo-img" />
            <div className="topnav__brand">
              <span className="topnav__brand-name">Exquisite Foods</span>
              <span className="topnav__brand-tagline">The Olive Oil Experience</span>
            </div>
          </NavLink>
          <button
            className={`topnav__toggle${mobileOpen ? ' is-open' : ''}`}
            onClick={this.toggle}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={`topnav__links${mobileOpen ? ' open' : ''}`}>
          <NavLink exact to="/"                onClick={this.close}>Home</NavLink>
          <NavLink to="/EcoOlive"             onClick={this.close}>Organic Oil</NavLink>
          <NavLink to="/ExtOlive"             onClick={this.close}>Extra Virgin</NavLink>
          <NavLink to="/JamsonOil"            onClick={this.close}>Oil &amp; Jamón</NavLink>
          <NavLink to="/HealtBenefits"        onClick={this.close}>Health Benefits</NavLink>
          <NavLink to="/contact"              onClick={this.close}>Contact</NavLink>
        </nav>
      </div>
    );
  }
}

export default TopNav;

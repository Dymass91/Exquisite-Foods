import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideDrawer.css';
import SocialFollow from './SocialFollow';
import ImgLogo from '../images/Logo.jpg';
import Backdrop from './Backdrop'


class SideDrawer extends Component {


    state = {
        isOpen: false,
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    closeNavbar = () => {
        this.setState({
            isOpen: false
        })
    }

    backdropClickHandler = () => {
        this.setState({ isOpen: false })

    }
    render() {
        let backdrop;


        if (this.state.isOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }


        return (
            <nav className='toolbar__navigation'>

                <div className="toolbar">
                    <img className="toolbarLogo" src={ImgLogo} alt="Logo" />
                    <div className="toolbar__logo"> </div>
                    <div className="toggle-button" onClick={this.handleClick}>
                        <div className="toggle-button__line"></div>
                        <div className="toggle-button__line"></div>
                        <div className="toggle-button__line"></div>
                    </div>
                </div>
                <ul className={this.state.isOpen ? 'side-drawer open' : 'side-drawer'}>
                    <li><Link onClick={this.closeNavbar} to={"/"}>Home Page</Link></li>
                    <li><Link onClick={this.closeNavbar} to={"/EcoOlive"}>Organic olive oil</Link></li>
                    <li><Link onClick={this.closeNavbar} to={"/ExtOlive"}>Extra virgin olive oil</Link></li>
                    <li><Link onClick={this.closeNavbar} to={"/JamsonOil"}>Oil & Jamón</Link></li>
                    <li><Link onClick={this.closeNavbar} to={"/HealtBenefits"}>Health Benefits</Link></li>
                    <li><Link onClick={this.closeNavbar} to={"/contact"}>Contact</Link></li>

                    <SocialFollow />
                </ul>
                {backdrop}
            </nav>

        );
    }
}

export default SideDrawer;
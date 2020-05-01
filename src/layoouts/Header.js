import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "../styles/Header.css";

import img1 from '../images/MainImg8.jpg';
import img2 from '../images/MainImg4.jpg';
import img3 from '../images/header3.jpeg';
import img4 from '../images/olive-oil-head.jpg';
import img5 from '../images/MainImg5.jpg';
import img6 from '../images/MainImg7.jpg';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const Header = () => {
    return (

        <div>
            <Route render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                        key={(location.key)}
                        timeout={2000}
                        classNames="fade"
                    >

                        <Switch location={location}>
                            <Route path="/" exact render={() => (
                                <img src={img2} alt="Header" />
                            )} />
                            <Route path="/ExtOlive" render={() => (
                                <img src={img6} alt="Header" />
                            )} />
                            <Route path="/EcoOlive" render={() => (
                                <img src={img5} alt="Header" />
                            )} />
                            <Route path="/JamsonOil" render={() => (
                                <img src={img1} alt="Header" />
                            )} />
                            <Route path="/contact" render={() => (
                                <img src={img3} alt="Header" />
                            )} />
                            <Route path="/HealtBenefits" render={() => (
                                <img src={img4} alt="Header" />

                            )} />
                            <Route render={() => (
                                <img src={img1} alt="Header" />
                            )} />
                        </Switch>

                    </CSSTransition>
                </TransitionGroup>
            )} />

        </div>

    );
}

export default Header;
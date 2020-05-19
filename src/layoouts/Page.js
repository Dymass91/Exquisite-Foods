import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import HealthBenefits from '../pages/HealthBenefits';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import EcoOlive from '../pages/EcoOliveOil';
import ExtOlive from '../pages/ExtVirOliveOil';
import JamsonOil from '../pages/JamsonOil';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
const Page = () => {


    return (
        <div className="container">
            <Route render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                        key={(location.key)}
                        timeout={450}
                        classNames="fade"
                    >
                        <div >
                            <Switch location={location} >
                                <Route path="/" exact component={HomePage} />
                                <Route path="/HealtBenefits" component={HealthBenefits} />
                                <Route path="/Contact" component={ContactPage} />
                                <Route path="/EcoOlive" component={EcoOlive} />
                                <Route path="/ExtOlive" component={ExtOlive} />
                                <Route path="/JamsonOil" component={JamsonOil} />
                                <Route path="/" component={ErrorPage} />
                            </Switch>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            )} />
        </div>
    );
}

export default Page;
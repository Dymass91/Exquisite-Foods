import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import HealthBenefits from '../pages/HealthBenefits';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import EcoOlive from '../pages/EcoOliveOil';
import ExtOlive from '../pages/ExtVirOliveOil';
import JamsonOil from '../pages/JamsonOil';

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/HealtBenefits" component={HealthBenefits} />
                <Route path="/Contact" component={ContactPage} />
                <Route path="/EcoOlive" component={EcoOlive} />
                <Route path="/ExtOlive" component={ExtOlive} />
                <Route path="/JamsonOil" component={JamsonOil} />
                <Route path="/" component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;
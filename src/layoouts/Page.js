import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ProductListPage from '../pages/ProductListPage';
import AdminPage from '../pages/AdminPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';
import EcoOlive from '../pages/EcoOliveOil';
import ExtOlive from '../pages/ExtVirOliveOil';
const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/Products" component={ProductListPage} />
                <Route path="/Product/:id" component={ProductPage} />
                <Route path="/Admin" component={AdminPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/Contact" component={ContactPage} />
                <Route path="/EcoOlive" component={EcoOlive} />
                <Route path="/ExtOlive" component={ExtOlive} />
                <Route path="/" component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;
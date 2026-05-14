import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import TopNav from './layoouts/TopNav';
import Header from './layoouts/Header';
import Page from './layoouts/Page';
import Footer from './layoouts/Footer';
import Title from './layoouts/Title';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <Title />
          <div className="App">
            <TopNav />
            <Header />
            <main className="main-content">
              <Page />
            </main>
            <Footer />
            <CartDrawer />
          </div>
        </Router>
      </CartProvider>
    );
  }
}

export default App;

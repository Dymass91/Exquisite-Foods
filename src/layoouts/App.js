import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Page from './Page';
import Navigation from './Navigation';
import Footer from './Footer';
import Logo from './Logo';
import Navbar from './Navbar';



class App extends Component {

  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>

        <div className="App">
          <div>
            {<Navbar />}
          </div>
          <div>
            {<Logo />}
          </div>
          <header>
            {<Header />}
          </header>
          <main>
            <aside>
              {<Navigation />}
            </aside>
            <section className="Page">
              {<Page />}
            </section>
          </main>
          <footer>
            {<Footer />}
          </footer>
        </div>
      </Router >
    );
  }
}
export default App;

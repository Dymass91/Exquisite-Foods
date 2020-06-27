import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './layoouts/Header';
import Page from './layoouts/Page';
import Navigation from './layoouts/Navigation';
import Footer from './layoouts/Footer';
import Logo from './layoouts/Logo';
import Navbar from './layoouts/Navbar';
import Title from './layoouts/Title';


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
        <Title />
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

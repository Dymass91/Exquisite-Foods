import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Header.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import img1 from '../images/MainImg8.jpg';
import img2 from '../images/MainImg4.jpg';
import img3 from '../images/header3.jpeg';
import img4 from '../images/olive-oil-head.jpg';
import img5 from '../images/MainImg5.jpg';
import img6 from '../images/MainImg7.jpg';

const slides = {
  home:     { img: img2, title: 'Exquisite Foods',       sub: 'Impress your senses\nenhance the flavour of your life' },
  ext:      { img: img6, title: 'Extra Virgin Oil',      sub: 'Pure cold-pressed excellence\nfrom Andalusia' },
  eco:      { img: img5, title: 'Organic Olive Oil',     sub: 'Nature at its finest\ncertified organic' },
  jamon:    { img: img1, title: 'Oil & Jamón',           sub: 'A true Iberian experience\nhandcrafted with passion' },
  contact:  { img: img3, title: 'Contact Us',            sub: 'We would love to hear\nfrom you' },
  benefits: { img: img4, title: 'Health Benefits',       sub: 'The gift of nature\'s finest\nfor your wellbeing' },
  checkout: { img: img2, title: 'Checkout',              sub: 'Secure order\nsummary & payment' },
  fallback: { img: img1, title: 'Exquisite Foods',       sub: '' },
};

const HeroSlide = ({ img, title, sub }) => (
  <div className="hero">
    <img className="hero__img" src={img} alt={title} />
    <div className="hero__overlay">
      <h1 className="hero__title">{title}</h1>
      {sub && <p className="hero__sub">{sub.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}</p>}
    </div>
  </div>
);

const Header = () => (
  <div className="header-wrap">
    <Route render={({ location }) => (
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} timeout={700} classNames="hero-fade">
          <Switch location={location}>
            <Route path="/"            exact render={() => <HeroSlide {...slides.home} />} />
            <Route path="/ExtOlive"         render={() => <HeroSlide {...slides.ext} />} />
            <Route path="/EcoOlive"         render={() => <HeroSlide {...slides.eco} />} />
            <Route path="/JamsonOil"        render={() => <HeroSlide {...slides.jamon} />} />
            <Route path="/contact"          render={() => <HeroSlide {...slides.contact} />} />
            <Route path="/HealtBenefits"    render={() => <HeroSlide {...slides.benefits} />} />
            <Route path="/checkout"         render={() => <HeroSlide {...slides.checkout} />} />
            <Route                          render={() => <HeroSlide {...slides.fallback} />} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  </div>
);

export default Header;

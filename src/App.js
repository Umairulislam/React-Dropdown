import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Development from './components/pages/Development';
import Design from './components/pages/Design';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/marketing' exact component={Marketing} />
        <Route path='/consulting' exact component={Consulting} />
        <Route path='/Development' exact component={Development} />
        <Route path='/Design' exact component={Design} />
        <Route path='/products' exact component={Products} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import SignIn from './pages/SignIn'
import Cart from './pages/Cart'
import NoMatch from './pages/NoMatch';
import { Nav } from './components/Nav';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Shop' component={Shop} />
          <Route exact path='/AboutUs' component={AboutUs} />
          <Route exact path='/ContactUs' component={ContactUs} />
          <Route exact path='/SignIn' component={SignIn} />
          <Route exact path='/Cart' component={Cart} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
    )
  }
};

export default App;

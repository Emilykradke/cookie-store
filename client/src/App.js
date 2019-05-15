import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';
// import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails'
import NoMatch from './pages/NoMatch';
import Nav from './components/Layout/Nav/Nav';
import Footer from './components/Layout/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      autnehticated: false
    }
  }

  addToCart = (productObj) => {
    this.setState({
      cart: [...this.state.cart, productObj]
    }, () => {console.log(this.state.cart)});
  }

  render() {
    const { cart } = this.state;
    console.log(this.props)
    return (
    <Router>
      <Fragment>
        <Nav authenticated={this.state.authenticated}/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Shop'>
            <Shop
              props={cart}
            />
          </Route>
          <Route exact path='/AboutUs' component={AboutUs} />
          <Route exact path='/ContactUs' component={ContactUs} />
          <Route exact path='/SignIn' component={SignIn} />
          <Route exact path='/Cart'>
            <ProductDetails
              props={cart}
            />
          </Route>
          <Route exact path='/products/:id'  render={() => (
            <ProductDetails
              addToCart={(productObj) => this.addToCart(productObj)} />
          )} />
        <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
    )
  }
};

export default App;

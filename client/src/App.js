import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails'
import NoMatch from './pages/NoMatch';
import Nav from './components/Layout/Nav/Nav';
import Footer from './components/Layout/Footer/Footer';
import API from "./utils/API";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      products: [],
      authenticated: false
    }
  }

  componentDidMount() {
    this.loadProducts();
    // console.log(this.props.cart)
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({ 
          products: res.data 
        }),
      )
      .catch(err => console.log(err))
  }
  
  addToCart = (productObj) => {
    this.setState({
      cart: [...this.state.cart, productObj]
    }, () => {console.log(this.state.cart)});
  }

  render() {
    return (
    <Router>
      <Fragment>
        <Nav authenticated={this.state.authenticated}/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Shop'>
            <Shop
              products={this.state.products}
              addToCart={this.addToCart}
              cart={this.state.cart}
            />
          </Route>
          <Route exact path='/AboutUs' component={AboutUs} />
          <Route exact path='/ContactUs' component={ContactUs} />
          <Route exact path='/SignIn' component={SignIn} />
          <Route exact path='/Cart'>
            <Cart
              props={this.state.cart}
            />
          </Route>
          <Route exact path='/products/:id'  render={() => (
            <ProductDetails
              products={this.state.products}
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

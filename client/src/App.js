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
import Checkout from './pages/Checkout';
import Footer from './components/Layout/Footer/Footer';
import API from "./utils/API";

class App extends Component {

    state = {
      cart: [],
      products: [],
      authenticated: false,
      isProductsLoaded: false
    }

  componentDidMount() {
    this.loadProducts();
    // console.log(this.props.cart)
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        // Products have finished loading so setState to reutls
        this.setState({ 
          products: res.data,
          isProductsLoaded: true 
        })
        
      )
      .catch(err => console.log(err))
  }
  
  addToCart = (productObj) => {
    this.setState({
      cart: [...this.state.cart, productObj]
    }, () => {console.log(this.state.cart)});
  }



  render() {
    const { cart, products, authenticated, isProductsLoaded } = this.state;

    return (
    <Router>
      <Fragment>
        <Nav 
          cart = {cart}
          authenticated={authenticated}/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Shop'>
            <Shop
              products={products}
              addToCart={this.addToCart}
              cart={cart}
              isProductsLoaded = {isProductsLoaded}
            />
          </Route>
          <Route exact path='/AboutUs' component={AboutUs} />
          <Route exact path='/ContactUs' component={ContactUs} />
          <Route exact path='/SignIn' component={SignIn} />
          <Route exact path='/Checkout' component={Checkout} />
          <Route exact path='/Cart'>
            <Cart
              cart={cart}
            />
          </Route>
          <Route exact path='/products/:id'  render={() => (
            <ProductDetails
              products={products}
              addToCart={(productObj) => this.addToCart(productObj)} 
              isProductsLoaded = {isProductsLoaded}/>
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

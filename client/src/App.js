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
import Checkout from './components/Checkout';
import Footer from './components/Layout/Footer/Footer';
import API from "./utils/API";
import BurgerMenu from './components/Layout/Nav/BurgerMenu';
import MenuBackdrop from './components/Layout/Nav/Backdrop';

class App extends Component {

    state = {
      cart: [],
      products: [],
      authenticated: false,
      isProductsLoaded: false,
      burgerMenuopen: false
    }

  componentDidMount() {
    this.loadProducts();
    // console.log(this.props.cart)
  }

  burgerToggleClickHandler = () => {
    this.setState((prevState) =>{
      return {burgerMenuOpen: !prevState.burgerMenuOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({burgerMenuOpen: false})
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

    let burgerMenu;
    let backdrop;

    if (this.state.burgerMenuOpen) {
      burgerMenu = <BurgerMenu click={this.backdropClickHandler} />
      backdrop = <MenuBackdrop click={this.backdropClickHandler} />
    }

    return (
    <Router>
      <Fragment>
        <Nav 
          burgerClickHandler={this.burgerToggleClickHandler}
          cart = {cart}
          authenticated={authenticated}/>
        {burgerMenu}
        {backdrop}
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

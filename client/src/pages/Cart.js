import React, { Component } from "react";
import { Link } from "react-router-dom"
import Container from "../components/Layout/Container/Container"

class Cart extends Component {
  state = {
    cartItems: []
  }

  componentDidMount() {
    this.setState({
      cartItems: this.props.props
    }, () => {console.log(this.state.cartItems)})
    // calculateCartTotal();
  }

  calculateCartTotal() {
    const itemTotal = this.state.cartItems.total.map(price => {
      return price.total
    })
    const cartTotal = itemTotal.reduce((prev, curr) => {
      return prev + curr;
    }, () => {console.log(cartTotal)})
  }

render(){
  return(
    <Container>
      <h1>Your Cart</h1>
      <div id="cartItems">
        <ul>
          {this.state.cartItems.map(cartItem => (
            <div className="product-container" key={cartItem.product._id}>
              <Link to={"/products/" + cartItem.product._id}>
                <img src={cartItem.product.imagePath} alt="cookie"/>
              </Link>
              <div className="productDetails">
                <div className="flavor">{cartItem.product.flavor}</div>
                <div className="price">{cartItem.product.price}</div>
                <div className="quantity">QTY {cartItem.quantity}</div>
                <div className="itemTotal">TOTAL {cartItem.total}</div>
              </div>
            </div>
          ))}
        </ul> 
      </div>
    </Container>
  ) 
}
};

export default Cart;
import React, { Component } from "react";
import { Link } from "react-router-dom"

class Cart extends Component {
  state = {
    cartTotal: null
  }

  componentDidMount() {
    if (this.props.cart.length) {
      this.calculateCartTotal(this.props.cart);
    }
    console.log(this.props.cart);
    // console.log(this.calculateCartTotal(this.props.cart))
  }

  calculateCartTotal() {
    const totalArr = []
    this.props.cart.forEach(item => {
      return totalArr.push(item.total)
    })
    console.log(totalArr);
    const cartTotal = totalArr.reduce((prev, curr) => {
      return prev + curr;
    })
    this.setState({
      cartTotal: cartTotal})
  }

render(){
  return(
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div id="cartItems">
        <>
          {(this.props.cart.length) ?
            <div>
              <ul>
                {this.props.cart.map(cartItem => (
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
              <div className="subtotal">
                Subtotal: {this.state.cartTotal}
              </div>
          </div>
          :
          <div className="empty-cart">
            <p>Your Cart is Empty</p>
          </div>
          }
        </>
      </div>
    </div>
  ) 
}
};

export default Cart;
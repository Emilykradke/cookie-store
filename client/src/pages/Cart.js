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
      <h1 className="title">Your Cart</h1>
      <div className="items-container"id="cartItems">
        <>
          {(this.props.cart.length) ?
            <div>
              <ul>
                {this.props.cart.map(cartItem => (
                  <div className="item" key={cartItem.product._id}>
                    
                    <div className="image-block">
                      <Link to={"/products/" + cartItem.product._id}>
                        <img src={cartItem.product.imagePath} alt="cookie"/>
                      </Link>
                    </div>
                    <div className="details-block">
                      <div className="block">
                        <span className="label">Flavor: </span>
                        <p className="value">{cartItem.product.flavor}</p>
                      </div>
                      <div className="block">
                        <span className="label">Price: </span>
                        <p className="value">$ {cartItem.product.price}.00</p>
                      </div>
                      <div className="block">
                        <span className="label">Quantity: </span>
                        <p className="value">{cartItem.quantity}</p>
                      </div>
                    </div>
                    <div className="block">
                      <span className="label">TOTAL: </span>
                      <p className="value">$ {cartItem.total}.00</p>
                    </div>
                  </div>
                ))}
              </ul> 

            <div className="subtotal-container">
              <div className="block">
                <span className="subtotal-label">SUBTOTAL: </span>
                <span className="dollar-amount">$ {this.state.cartTotal}.00</span>
              </div>
            </div>

            <div className="btn-block">
              <Link to="/Shop" style={{ textDecoration: 'none' }}>
                <button className="continueShopping">
                  Continue Shopping
                </button>
              </Link>
              <Link to="/Signin" style={{ textDecoration: 'none' }}>
                <button className="checkoutLink">
                  Checkout
                </button>
              </Link>
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

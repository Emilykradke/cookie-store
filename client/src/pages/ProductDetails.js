import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom"
import API from "../utils/API";

class ProductDetails extends Component {
  state = {
    product: {},
    total: "",
    addedToCart: false
  }

  componentDidMount() {
    API.getProduct(this.props.match.params.id)
      .then(res => 
        this.setState({ 
          product: res.data
        }))
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { value } = event.target 
    this.setState({
      quantity: value,
      total: this.state.product.price * parseInt(value)
    }, () => {console.log(this.state)})
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const quantity = parseInt(this.state.quantity);
    // const quantity = parseInt(value)
    console.log(typeof quantity)
    if (isNaN(quantity) || quantity < 1) {
      console.log("That is an invalid number")
    } else {
      this.props.addToCart(this.state)
      this.setState({
        addedToCart: true,
        quantity: ""
      })
    }
  }

render(){
  const { addedToCart, product } = this.state;
  return(
    <div className="product-details-container">
      <div className="productImage">
        <img src={product.imagePath} alt={product.flavor}/>
      </div>
      <div className="productDetails">
        <h1>{product.flavor}</h1>
        <p>{product.description}</p>
        <p>$ {product.price}.00</p>
      </div>

      <form>
        <div className="quantity-container"></div>
          <div className="block">
            <label>Quantity</label>
            <input
              onChange={this.handleInputChange}
              name="quantity"
              placeholder="Enter Quantity Here"
              defaultValue=""
            ></input>
            <button
              onClick={this.handleFormSubmit}
            >
            Add to Cart
            </button>
          </div>

        {addedToCart ?

          <Fragment>
            <div className="conditional-button">
              <p className="product-added"><b>{this.state.product.flavor} Cookies</b> Added To Cart!</p>
              <Link to="/Shop" className="">
                Continue Shopping
              </Link>
              <Link to="/Cart" className="">
                Checkout
              </Link>
            </div>
          </Fragment>
          :null
          }
      </form>
    </div>
  )
}
};

export default withRouter(ProductDetails);
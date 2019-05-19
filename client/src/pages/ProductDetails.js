import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom"
import Container from "../components/Layout/Container/Container"
import { Input, Button } from "../components/Layout/Form/Form" 
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
    <Container>
      <div className="productImage">
        <img src={product.imagePath} alt={product.flavor}/>
      </div>
      <div className="productDetails">
        <h1>{product.flavor}</h1>
        <p>{product.description}</p>
        <p>$ {product.price}.00</p>
      </div>
      <form className="quantity">
        <div>Qty</div>
        <Input
          defaultValue=""
          onChange={this.handleInputChange}
          name="quantity"
          placeholder="Enter Quantity Here"
          />
        <Button
          onClick={this.handleFormSubmit}
        >
        Add to Cart
        </Button>

        {addedToCart ?

          <Fragment>
            <p><b>{this.state.product.flavor} Cookies</b> Added To Cart!</p>
            <Link to="/Shop" className="continueShopping">
              Continue Shopping
            </Link>
            <Link to="/Cart" className="checkoutLink">
              Checkout
            </Link>
          </Fragment>
          :null
          }
      </form>
    </Container>
  )
}
};

export default withRouter(ProductDetails);
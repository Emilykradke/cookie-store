import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom"
import Container from "../components/Layout/Container/Container"
import { Input, Button } from "../components/Layout/Form/Form" 

class ProductDetails extends Component {
  state = {
    product: null,
    total: "",
    addedToCart: false
  }

  componentWillMount() {
    const product = this.props.products.filter(product => {
      return product._id === this.props.match.params.id
    })
    this.setState({
      product: product[0]
    })
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
    this.props.addToCart(this.state)
    this.setState({
      addedToCart: true,
      quantity: ""
    })
  }

render(){
  const { addedToCart, product } = this.state;
  return(
    <Container>
      <div className="productImage">
        <img src={this.state.product.imagePath} alt={this.state.product.flavor}/>
      </div>
      <div className="productDetails">
        <h1>{product.flavor}</h1>
        <p>{product.description}</p>
        <p>$ {product.price}.00</p>
      </div>
      <form className="quantity">
        <div>Qty</div>
        <Input
          defaultValue={this.state.quantity}
          onChange={this.handleInputChange}
          name="quantity"
          placeholder="1"
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
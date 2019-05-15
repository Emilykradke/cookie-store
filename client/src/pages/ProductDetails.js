import React, { Component } from "react";
import Container from "../components/Layout/Container/Container"
import API from "../utils/API";
import { Input, Button } from "../components/Layout/Form/Form" 

class ProductDetails extends Component {
  state = {
    products: {},
    quantity: "",
    total: "",
    
  }

  componentDidMount() {
    API.getProduct(this.props.match.params.id)
      .then(res => 
        this.setState({ products: res.data}, () => {console.log(this.state)}))
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value} = event.target;
    const total = this.state.products.price * parseInt(value)
    this.setState({
      [name]: value,
      total: total
    }, () => {console.log(this.state)})
  }

  handleFormSubmit = event => {
    event.preventDefault();
    // API.addToCart({

    // })
  }

render(){
  return(
    <Container>
      <div className="productImage">
        <img src={this.state.products.imagePath} alt={this.state.products.flavor}/>
      </div>
      <div className="productDetails">
        <h1>{this.state.products.flavor}</h1>
        <p>{this.state.products.description}</p>
      </div>
      <form className="quantity">
        <div>Qty</div>
        <Input
          value={this.state.quantity}
          onChange={this.handleInputChange}
          name="quantity"
          placeholder="1"
          />
        <Button
          onClick={this.handleFormSubmit}
        >
        Add to Cart
        </Button>
      </form>
    </Container>
  )
}
};

export default ProductDetails;
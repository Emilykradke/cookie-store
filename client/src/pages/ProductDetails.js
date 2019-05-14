import React, { Component } from "react";
import Container from "../components/Layout/Container/Container"
import API from "../utils/API";

class ProductDetails extends Component {
  state = {
    products: {}
  }

  componentDidMount() {
    API.getProduct(this.props.match.params.id)
      .then(res => 
        this.setState({ products: res.data}))
      .catch(err => console.log(err))
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
      <div className="quantity">
        
      </div>
    </Container>
  )
}
};

export default ProductDetails;
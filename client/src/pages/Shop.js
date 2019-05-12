import React, { Component } from "react";
import Container from "../components/Layout/Container/Container"
import API from "../utils/API";

class Shop extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        console.log(res.data)
        )
  }

  render(){
  return(
    <Container>
      
    </Container>
  )
}
};

export default Shop;
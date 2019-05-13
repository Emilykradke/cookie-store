import React, { Component } from "react";
import Container from "../components/Layout/Container/Container"
import ProductContainer from "../components/Pages/Shop/ProductContainer/ProductContainer"
import API from "../utils/API";

class Shop extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    API.getProducts()
      .then(res =>
        this.setState({ 
          products: res.data 
        }),
      )
      .catch(err => console.log(err))
  }

  render(){
  return(
    <Container>
      <div id="products">
        <ul>
          {this.state.products.map(product => (
            console.log(product),
            <ProductContainer
              flavor={product.flavor}
              image={product.imagePath}
              description={product.description}
              price={product.price}
              key={product._id}>
            </ProductContainer>
          ))}
        </ul> 
      </div>
    </Container>
  )
}
};

export default Shop;
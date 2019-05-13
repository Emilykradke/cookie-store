import React, { Component } from "react";
import { Link } from "react-router-dom"
import Container from "../components/Layout/Container/Container"
import ProductContainer from "../components/Pages/Shop/ProductContainer/ProductContainer"
import API from "../utils/API";
import DropdownMenu from "../components/Pages/Shop/DropdownMenu/DropdownMenu";

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
      <DropdownMenu>
      </DropdownMenu>
      <div id="products">
        <ul>
          {this.state.products.map(product => (
            // console.log(product),
              <ProductContainer key={product._id}>
                <Link to={"/products/" + product._id}>
                  <img src={product.imagePath} alt="cookie"/>
                  <div className="flavor">{product.flavor}</div>
                  <div className="price">{product.price}</div>
                </Link>
              </ProductContainer>
          ))}
        </ul> 
      </div>
    </Container>
  )
}
};

export default Shop;
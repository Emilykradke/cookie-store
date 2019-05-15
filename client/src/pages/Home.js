import React, { Component } from "react";
import Container from "../components/Layout/Container/Container"

class Home extends Component {
render(){
  return(
    <Container>
      <div className="hero" >
        <h1 className="title">Cookie Store</h1>
      </div>
    </Container>
  ) 
}
};

export default Home;
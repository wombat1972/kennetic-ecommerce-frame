import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import data from "./data";

import Head from "./Components/Head";
import Products from "./Components/Products";

function App() {
  const [products] = useState(data);
  return (
    <div className="App">
      <Head />
      <hr />
      <div className="product">
        <Products
          product={this.state.filteredProducts}
          handleAddToCart={this.handleAddToCart}
        />
      </div>
    </div>
  );
}

export default App;

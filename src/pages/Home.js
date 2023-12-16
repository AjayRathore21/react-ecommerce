import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-lists/productList";

export default function Home() {
  return (
    <>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </>
  );
}

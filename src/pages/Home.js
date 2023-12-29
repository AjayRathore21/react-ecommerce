import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-lists/components/productList";

export default function Home() {
  return (
    <>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </>
  );
}

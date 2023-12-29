import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/product-lists/components/ProductDetails";

export default function ProductDetailPage() {
  return (
    <>
      <Navbar>
        <ProductDetail></ProductDetail>
      </Navbar>
    </>
  );
}

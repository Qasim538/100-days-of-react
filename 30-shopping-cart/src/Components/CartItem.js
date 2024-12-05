import React, { useEffect, useState } from "react";
import { products } from "../Products";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const findDetail = products.filter((product) => product.id === productId)[0];
    setDetail(findDetail);
  }, [productId]);
  
  console.log(detail);

  return <div>cartItem</div>;
};

export default CartItem;

import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartTabs = () => {
  const carts = useSelector((store) => store.cart.items);

  return (
    <div className="fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid frid-rows-[60px_1fr_60px]">
      <h2 className="p-5 text-white text-2xl">Shopping cart</h2>
      <div className="p-5">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className="grid grid-cols-2">
        <button className="bg-black text-white">Checkout</button>
        <button className="bg-amber-600 text-white">Close</button>
      </div>
    </div>
  );
};

export default CartTabs;

import React from "react";
import Image1 from './images/item-1.jpeg'

const Menu = () => {
  return (
    <div className="cection-center">
      <article className="menu-item">
        <img src={Image1} alt="image" className="photo"/>
        <div className="item-info">
          <header>
            <h4>Dish Title</h4>
            <h4 className="price">£40.00</h4>
          </header>
          <p className="item-text">This is delicious!</p>
        </div>
      </article>
    </div>
  );
};

export default Menu;

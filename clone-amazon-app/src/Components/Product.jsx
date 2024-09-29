import React from 'react';
import './Styles/Product.css';

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>${price}</strong>
        </p>
        <div className="product__rating">
          {/* Displaying dynamic rating */}
          {Array(Math.floor(rating))
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          <span>{rating}/5</span>
        </div>
      </div>
            
      <img src={image} alt={title}  />
      <button className="product__button">Add to Basket</button>
    </div>
  );
};

export default Product;

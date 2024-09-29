import React from "react";
import { items } from "./data";

const ProductPage = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div className="col-lg-4 my-3 text-center">
                  <div className="card py-2" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={product.imgSrc}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>

                      <button className="btn btn-primary mx-2">£{product.price}</button>
                      <button className="btn btn-warning mx-2">
                        add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductPage;

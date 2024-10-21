
import React from 'react'

const CarouselItem = ({ carouselItems = [] }) => {
  return (
    <div className="carousel">
      <div className="list">
        {carouselItems.length > 0 ? (
          carouselItems.map((item, index) => (
            <div key={index} className="item" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="content">
                <div className="title">SLIDER</div>
                <div className="name">{item.name}</div>
                <div className="des">{item.description}</div>
                <div className="btn">
                  <button>See More</button>
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items to display</p>
        )}
      </div>
    </div>
  );
};

export default CarouselItem



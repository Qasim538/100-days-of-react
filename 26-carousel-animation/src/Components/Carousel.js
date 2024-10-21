import React, { useState, useEffect, useRef } from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.css'; // Add your custom styles here
import itemsData from './Data'



const Carousel = () => {
  const [carouselItems, setCarouselItems] = useState(itemsData); // State to store carousel items
  const [runningTime, setRunningTime] = useState(3000);
  const [timeAutoNext, setTimeAutoNext] = useState(7000);
  const runningTimeRef = useRef(null); // For animation trigger

  let runNextAutoTimeout = useRef(null);
  let runTimeOut = useRef(null);

  const showSlider = (type) => {
    if (type === 'next') {
      setCarouselItems((prevItems) => [
        ...prevItems.slice(1),
        prevItems[0],
      ]);
    } else if (type === 'prev') {
      setCarouselItems((prevItems) => [
        prevItems[prevItems.length - 1],
        ...prevItems.slice(0, prevItems.length - 1),
      ]);
    }

    resetTimeAnimation();

    clearTimeout(runTimeOut.current);
    runTimeOut.current = setTimeout(() => {
      resetAnimation();
    }, runningTime);

    clearTimeout(runNextAutoTimeout.current);
    runNextAutoTimeout.current = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);
  };

  const resetTimeAnimation = () => {
    if (runningTimeRef.current) {
      runningTimeRef.current.style.animation = 'none';
      void runningTimeRef.current.offsetHeight;
      
      runningTimeRef.current.style.animation = null;
      runningTimeRef.current.style.animation = 'runningTime 7s linear 1 forwards';
    }
  };

  const resetAnimation = () => {
    const carousel = document.querySelector('.carousel');
    carousel.classList.remove('next');
    carousel.classList.remove('prev');
  };

  useEffect(() => {
    runNextAutoTimeout.current = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);

    return () => {
      clearTimeout(runNextAutoTimeout.current);
      clearTimeout(runTimeOut.current);
    };
  }, []);

  return (
    <div className="carousel">
      <div className="list">
        {carouselItems.map((item, index) => (
          <CarouselItem
            key={index}
            backgroundImage={item.backgroundImage}
            title={item.title}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>

      <div className="arrows">
        <button className="prev" onClick={() => showSlider('prev')}>&lt;</button>
        <button className="next" onClick={() => showSlider('next')}>&gt;</button>
      </div>

      <div className="timeRunning" ref={runningTimeRef}></div>
    </div>
  );
};

export default Carousel;

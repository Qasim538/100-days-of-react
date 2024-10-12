import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Slider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await res.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages();
  }, [url]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }
  if (errorMsg !== null) {
    return <div>Error occurred {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {images.length > 0 && (
        <img
          key={images[currentSlide].id}
          src={images[currentSlide].download_url}
          alt={images[currentSlide].author}
          className="current-image"
        />
      )}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />

      <div className="circle-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`current-indicator ${
              currentSlide === index ? "active-indicator" : "inactive-indicator"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;


import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";

const FetchApi = ({ term }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = "37883760-2118bb6a7c79f08b2054adaa9"; // Your API key

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=${API_KEY}&q=${term || 'london'}&image_type=photo&pretty=true`
        );
        const data = await response.json();
        setImages(data.hits);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
      setIsLoading(false);
    };

    fetchImages();
  }, [term]);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="row">
          {images.length > 0 ? (
            images.map((image) => (
              <div key={image.id} className="col-md-4 mb-4">
                <ImageCard image={image} />
              </div>
            ))
          ) : (
            <p>No images found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FetchApi;

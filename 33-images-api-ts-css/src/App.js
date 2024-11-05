import React, { useState, useEffect } from "react";
import ImagesCard from "./Components/ImagesCard";

const App = () => {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("paris");
  const [loading, setLoading] = useState(true);

  const downloadImages = async () => {
    const res = await fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    );
    const data = await res.json();
    setImages(data.hits);
    setLoading(false);
    // console.log(data.hits);
    

    return data;
  };

  useEffect(() => {
    downloadImages();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <ImagesCard key={image.id} image={image}/>
        ))}
      </div>
    </div>
  );
};

export default App;

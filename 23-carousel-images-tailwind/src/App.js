import React, { useState } from "react";
import { images } from "./Components/Data";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImg = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextImg = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToImage = (i) => {
    setCurrentIndex(i)
  }

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeftIcon onClick={prevImg} />
      </div>

      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRightIcon onClick={nextImg} />
      </div>
      <div className="flex top-4  justify-center py-2 cursor-pointer">
      {
        images.map((image, i) => (
          <div key={i} onClick={() => goToImage(i)} className="text-sm">
          <FiberManualRecordIcon />
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default App;

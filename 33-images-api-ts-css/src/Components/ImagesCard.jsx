import React from "react";

const ImagesCard = ({ image }) => {
  const tags = image.tags.split(',')
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg ">
      <img
        className="w-full"
        src={image.webformatURL}
        alt=""
      />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          {image.user}
        </div>
        <ul>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Likes:</strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 my-1 mr-2">
          #{tag}
        </span>
        ))}
     
      </div>
    </div>
  );
};

export default ImagesCard;

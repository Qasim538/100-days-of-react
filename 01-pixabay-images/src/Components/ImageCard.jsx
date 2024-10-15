import React from "react";

const ImageCard = ({ image }) => {
  const { webformatURL, user, views, downloads, likes, tags } = image;
  const tagArray = tags ? tags.split(",") : [];

  return (
    <div className="card">
      <img src={webformatURL} className="card-img-top" alt={`Image by ${user}`} />
      <div className="card-body">
        <h5 className="card-title">Photo by {user}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Views: </strong> {views}
          </li>
          <li className="list-group-item">
            <strong>Downloads: </strong> {downloads}
          </li>
          <li className="list-group-item">
            <strong>Likes: </strong> {likes}
          </li>
        </ul>
      </div>
      <div className="card-body">
        {tagArray.map((tag, index) => (
          <span
            key={index}
            className="badge bg-secondary me-2"
          >
            #{tag.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;

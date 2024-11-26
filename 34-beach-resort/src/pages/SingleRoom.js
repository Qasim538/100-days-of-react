import React, { useContext } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../Components/StyledHero";

const SingleRoom = () => {
  const { slug } = useParams(); // Extracting the "slug" parameter from the URL
  const { getRoom } = useContext(RoomContext);

  const room = getRoom(slug); // Fetching room details using the slug
  if (!room) {
    return (
      <div className="error">
        <h3>No such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          Back to Rooms
        </Link>
      </div>
    );
  }

  const { name, description, capacity, size, price, extras, images } = room;

  return (
    <>
      <Hero hero="roomsHero">
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Back to Rooms
          </Link>
        </Banner>
      </Hero>
      <section className="single-room">
        <div className="single-room-images">
          {images.map((item, index) => (
            <img key={index} src={item || defaultBcg} alt={name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>Price: ${price}</h6>
            <h6>Size: {size} SQFT</h6>
            <h6>
              Max Capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
          </article>
        </div>
      </section>
    </>
  );
};

export default SingleRoom;

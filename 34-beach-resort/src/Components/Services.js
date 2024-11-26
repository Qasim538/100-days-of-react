import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "lorem1 Ipsum dolo sit amet consecetur adipsing elite. Magni Corpris",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "lorem1 Ipsum dolo sit amet consecetur adipsing elite. Magni Corpris",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "lorem1 Ipsum dolo sit amet consecetur adipsing elite. Magni Corpris",
      },
      {
        icon: <FaBeer />,
        title: "Stronges Drink",
        info: "lorem1 Ipsum dolo sit amet consecetur adipsing elite. Magni Corpris",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

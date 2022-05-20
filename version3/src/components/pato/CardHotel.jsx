import React from "react";
import "../styles/cardHotel.css";
import { MdFavorite } from "react-icons/md";
import { BiSwim } from "react-icons/bi";
import { BiWifi } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const img =
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080";

const Card = () => {
  return (
    <div className="container">
      <div className="l-container">
        <img className="img-background" src={img} alt="" />
        <span className="icon-favorite">
          <MdFavorite />
        </span>
      </div>
      <div className="r-container">
        <div className="tr-container">
          <div className="category-name">
            <div className="category">
              <p className="type-category">Category</p>
              <span className="stars">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
            </div>
            <p className="hotel-name">Name</p>
          </div>
          <div className="rating">
            <p className="number-rating">8</p>
            <p className="text-rating">Muy bueno</p>
          </div>
        </div>
        <div className="container-location">
          <span className="location">
            <MdLocationOn />
          </span>
          <p className="text-location">Location</p>
          <p className="show-map">MOSTRAR EN EL MAPA</p>
        </div>
        <div className="wifi-swim">
          <span>
            <BiWifi />
          </span>
          <span>
            <BiSwim />
          </span>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe
          beatae cum ipsum maiores sit, adipisci corrupti, eum suscipit pariatur
          eaque sunt, totam earum odit nulla at consequuntur dolore expedita.
        </p>
        <button className="button-more-info">Ver Más</button>
      </div>
    </div>
  );
};

export default Card;

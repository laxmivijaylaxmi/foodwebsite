import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../MenuItem";
import { StoreContext } from "../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItem, addtoCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="Food" />
        {!cartItem[id] ? (
          <img
            src={assets.add_icon_white}
            className="add"
            alt="Add Icon"
            onClick={() => addtoCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove Icon"
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => addtoCart(id)}
              src={assets.add_icon_green}
              alt="Add Icon"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <p>{name}</p>
        <p className="text-gray-500">{description}</p>
        <p>₹{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

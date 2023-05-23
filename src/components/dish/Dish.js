import React from "react";

const Dish = (props) => {
  const { dish } = props;
  return (
    <div className="dishBox">
      <img src={dish.getImageSrc()} alt={dish.title} />
      <div className="padder">
      <div className="title">
        <h3>{dish.title}</h3>
        <div className="price">{dish.price}</div>
      </div>
      <div className="dectription">
        <p>{dish.dectription}</p>
        <button className="btn btn-main1">Order {dish.title}</button>
        </div>
      </div>
    </div>
  );
};

export default Dish;

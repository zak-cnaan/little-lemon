import React from "react";
import { Container } from "react-bootstrap";
import Dish from "../dish/Dish";

const dishes = [
  {
    id: 1,
    getImageSrc: () => require("../../assets/images/dish1.jpg"),
    title: "Dipisicing elit",
    dectription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, unde voluptatum reiciendis quasi, corrupti provident eius veritatis maxime ad nulla minima non error doloremque sapiente alias dicta accusantium possimus cupiditate.",
    price: "$12.50",
  },
  {
    id: 2,
    getImageSrc: () => require("../../assets/images/dish2.jpg"),
    title: "Ea asperiores",
    dectription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad tempora fugiat officiis deleniti eos quidem tempore odit consectetur, doloremque amet facere facilis consequatur iusto quibusdam sapiente eveniet ducimus corporis quis.",
    price: "$14.80",
  },
  {
    id: 3,
    getImageSrc: () => require("../../assets/images/dish3.jpg"),
    title: "Dignissimos",
    dectription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt recusandae quibusdam dignissimos reiciendis facilis necessitatibus quis quia labore optio tempore facere debitis repellendus, iste placeat est? Illum suscipit quod deserunt!",
    price: "$8.99",
  },
];
const Specials = () => {
  return (
    <section className="specials-section">
      <Container>
        <div className="title">
          <h2>Specials</h2>
          <button className="btn btn-main1 btn-lg">Order Online</button>
        </div>
        <div className="ourSpecials">
          {dishes.map((dish) => {
            return (
              <Dish key={dish.id} dish={dish} />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Specials;

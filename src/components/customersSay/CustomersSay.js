import React from "react";
import { Container } from "react-bootstrap";
import Testimonial from "../testimonial-item/TestimonialItem";

const testimonials = [
  {
    id: 1,
    imsSrc: "https://i.pravatar.cc/150?img=8",
    getImageSrc: () => require("../../assets/images/dish1.jpg"),
    name: "Boaz R.",
    dectription:
      "Adipisicing elit. Sequi architecto quod, iure delectus nulla optio pariatur sunt quaerat at saepe!",
    rate: 4,
  },
  {
    id: 2,
    imsSrc: "https://i.pravatar.cc/150?img=17",
    getImageSrc: () => require("../../assets/images/dish1.jpg"),
    name: "Jakov B.",
    dectription: "Unde numquam quisquam perferendis consequuntur veritatis nisi minima adipisci animi velit qui!",
    rate: 5,
  },
  {
    id: 3,
    imsSrc: "https://i.pravatar.cc/150?img=9",
    getImageSrc: () => require("../../assets/images/dish1.jpg"),
    name: "Dina D.",
    dectription: "Tempora dicta quos vitae provident, velit ex. Rem quidem ex dignissimos inventore!",
    rate: 3,
  },
  {
    id: 4,
    imsSrc: "https://i.pravatar.cc/150?img=12",
    getImageSrc: () => require("../../assets/images/dish1.jpg"),
    name: "Sveta R.",
    dectription:
      "Adipisicing elit. Sequi architecto quod, iure delectus nulla optio pariatur sunt quaerat at saepe!",
    rate: 5,
  },
];
const CustomersSay = () => {
  return (
    <section className="testominials-section">
      <Container>
        <h2>Testimonials</h2>
        <div className="testominals-list">
          {testimonials.map((item) => {
            return <Testimonial key={item.id} item={item} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default CustomersSay;

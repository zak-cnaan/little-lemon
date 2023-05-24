import React from "react";

const TestimonialItem = (props) => {
  const { item } = props;
  return (
    <div className="itemBox">
      <img src={item.imsSrc} alt={item.title} />
      <div className="padder">
        <div className="title">
          <h3>{item.name}</h3>
          <div className="rate">
            {[...Array(item.rate)].map((x, i) => (
              <span key={i}>&#10022;</span>
            ))}

            {item.rate < 5 && [...Array(5 - item.rate)].map((x, i) => (
              <span key={i}>&#10023;</span>
            ))}
          </div>
        </div>
        <div className="dectription">
          <p><span>&quot;</span>{item.dectription}<span>&quot;</span></p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;

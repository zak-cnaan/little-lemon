import { render, screen } from "@testing-library/react";
// import App from "./App";
import BookingForm from "./components/bookingForm/BookingForm";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
// import Home from "./components/Home";
import Hero from "./components/hero/Hero";

test("Check homepage for Render", () => {
  render(
    <Router>
      <Hero />
    </Router>
  );
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
});

const bookingData = {
  date: "",
  time: "",
  guests: "",
  occasion: "",
};

const availableTimes = ["16:00", "17:30", "18:50", "19:00", "20:00", "21:00"];

test("Renders the BookingForm heading", () => {
  render(
    <Router>
      <BookingForm availableTimes={availableTimes} />
    </Router>
  );
  // form button
  const btnElement = screen.getByText("Make Reservation");
  expect(btnElement).toBeInTheDocument();

  // form labels
  const formLabels = ["Choose date", "Choose time", "Number of guests", "Choose Occasion"];
  for (const label of formLabels){
    let element = screen.getByText(label);
    expect(element).toBeInTheDocument();
  }
});




test("BookingForm Options field test", async () => {
  const result = render(
    <Router>
      <BookingForm availableTimes={availableTimes} />
    </Router>
  );

  const occasion = result.container.querySelector('#occasion');
  expect(occasion).toBeInTheDocument();

  fireEvent.change(occasion[1], {
    target: {
      value: "Anniversary",
    },
  });

  expect(occasion[0].selected).toBe(true);
});

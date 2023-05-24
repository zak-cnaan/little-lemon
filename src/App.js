import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/home/Home";
import BookingPage from "./pages/booking/Booking";
import { useState } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {

  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

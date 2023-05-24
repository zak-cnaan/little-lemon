import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/home/Home";
import BookingPage from "./pages/booking/Booking";
import ConfirmBookingPage from "./pages/confirm-booking/confirmBooking";

import { useEffect, useReducer } from "react";

import { Route, Routes } from "react-router-dom";
import { fetchAPI, submitAPI } from "./bookingAPI";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const initializeTimes = { availableTimes: [] };
  const updateTimes = (state, action) => {
    return { availableTimes: action };
  };

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  const getTimesFromAPI = (date) => {
    const returnedTimes = fetchAPI(date);
    dispatch(returnedTimes);
  };

  // set initials times for today
  useEffect(() => {
    const today = new Date();
    getTimesFromAPI(today);
  }, []);

  const submitData = (data) => {
    const result = submitAPI(data);
    console.log(result);
    if (result) {
      window.localStorage.setItem('bookingInfo', JSON.stringify(data));
      navigate("/confirm-booking");
    }
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={state.availableTimes}
              dispatchTimes={getTimesFromAPI}
              submitData={submitData}
            />
          }
        />
        <Route path="/confirm-booking" element={<ConfirmBookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/home/Home";
import BookingPage from "./pages/booking/Booking";
import { useEffect, useReducer } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { fetchAPI, submitAPI } from "./bookingAPI";

function App() {
  // const updateTimes = (date) => {
  //   dispatchAvailableTimes(["18:00", "22:00"]);
  // };





  const initializeTimes = {availableTimes:[]};
  const updateTimes = (state, action) => {
    return {availableTimes: action}
  }

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  const getTimesFromAPI = (date) => {
    const returnedTimes = fetchAPI(date);
    dispatch(returnedTimes);
  }

// set initials times for today
  useEffect(() => {
    const today = new Date();
    getTimesFromAPI(today);
    
  }, []);


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={<BookingPage availableTimes={state.availableTimes} dispatchTimes={getTimesFromAPI} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

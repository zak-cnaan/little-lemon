import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/home/Home";
import BookingPage from "./pages/booking/Booking";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

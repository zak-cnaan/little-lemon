import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Reservations from './pages/reservation/Reservations';

import {Route, Routes, BrowserRouter} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
    </ChakraProvider>
  );
}

export default App;

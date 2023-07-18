
import './App.css';
import OfferedServices from './components/pages/OfferedServices/OfferedServices';
import About from './components/pages/About';
import Home from './components/pages/Home/Home';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer.js';



import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>

        {/* hex codes:
         #F3F1EC - beige-ish photos
         #C3C4BE - gray-sh color for Hi Im Margie
         #AD998A - brown color at the bottom
         #8F928B - gray to be made lighter  */}
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route
        path="/services"
        element={<OfferedServices/>}>

        </Route>

        <Route
        path="/about"
        element={<About/>}>

        </Route>

        <Route
        path="/"
        element={<Home/>}>

        </Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
          </>
    
  );
}

export default App;


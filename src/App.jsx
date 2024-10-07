import {Routes, Route } from "react-router-dom";

import NavbarComponent from "./Components/NavbarComponent";
import FooterComponent from "./Components/FooterComponent";

import HomePage from "./Pages/HomePage";
import FaqPage from "./Pages/FaqPage";
import KelasPage from "./Pages/KelasPage";
import SyaratKetentuanPage from "./Pages/SyaratKetentuanPage";
import TestimoniaPage from "./Pages/TestimoniaPage";




function App() {
  return(
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/Faq" Component={FaqPage}/>
        <Route path="/Kelas" Component={KelasPage}/>
        <Route path="/SyaratKetentuan" Component={SyaratKetentuanPage}/>
        <Route path="/Testimonial" Component={TestimoniaPage}/>
      </Routes>
      {/* <FooterComponent /> */}
      </div>
  )
}

export default App

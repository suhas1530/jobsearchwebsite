import { Routes, Route } from "react-router-dom";

import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Service } from "./Components/Service";
import { Award } from "./Components/Award";
import { Feature } from "./Components/Feature";
import { Gols } from "./Components/Gols";
import { Facts } from "./Components/Facts";
import { Price } from "./Components/Price";
import { Ctabox } from "./Components/Ctabox";
import { Testimonial } from "./Components/Testimonial";
import { Faq } from "./Components/Faq";
import { Blogs } from "./Components/Blogs";
import { Footer } from "./Components/Footer";
import { AboutUs } from "./Components/Pages/AboutUs";
import { ServicePage } from "./Components/Pages/ServicePage";

import { OurPages } from "./Components/Pages/OurPages";
import { Contact } from "./Components/Pages/Contact";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About/>} />
         <Route path="/about" element={<Service/>} />
          <Route path="/about" element={<Award/>} />
          <Route path="/about" element={<Feature/>} />
          <Route path="/about" element={<Gols/>} />
           <Route path="/about" element={<Facts/>} />
           <Route path="/about" element={<Price/>} />
           <Route path="/about" element={<Ctabox/>} />
            <Route path="/about" element={<Testimonial/>} />
            <Route path="/about" element={<Faq/>} />
             <Route path="/about" element={<Blogs/>} />




              <Route path="/about" element={<AboutUs/>} />
               <Route path="/servicepage" element={<ServicePage/>} />
              
                <Route path="/Blogs" element={<OurPages/>} />
                <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

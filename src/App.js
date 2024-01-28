import logo from "./logo.svg";
import "./App.css";
import { useContext, useEffect, useState } from "react";
import { CastleContext, ThemeContext } from "./index.js";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx" 
import {Routes, Route} from "react-router-dom"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Gallery from "./Gallery.jsx"
import Contact from "./Contact.jsx"

function App() {
  const NavList = {
    Home: "/",
    About_Us: "/about",
    Gallery: "/gallery",
    Contact_Us: "/contact",
  };


  return (
    <>
    <Nav value={NavList} />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

import React from 'react';
import LandingPage from "./components/landingpage/indext";
import AboutUs from "./components/About Us";
import Navbar from './components/navbar';
import Benefit from "./components/benefit";
import Footer from "./components/Footer";
import Team from "./components/Team";


export default function Home() {
  return (
      <main>
        <Navbar/>
        <LandingPage/>
        <AboutUs/>
        <Benefit/>
        <Team/>
        <Footer/>
      </main>
  );
}
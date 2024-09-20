


import React from 'react';
import Head from 'next/head';

import LandingPage from "./components/landingpage/indext";
import Footer from "./components/Footer";
import Benefit from "./components/Benefit";
import Team from "./components/Team";
import Navbar from "./components/navbar";
import AboutUs from "./components/Benefit/About Us";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aquasense - Smart Drainage System</title>
        <meta name="description" content="Say goodbye to drainage disasters with our smart solution!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <LandingPage />
      <AboutUs></AboutUs>
      <Benefit/>
      <Team/>
      <Footer/>
 
</div>

  );
}
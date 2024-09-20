
import React from 'react';
import Head from 'next/head';
import Navbar from './components/navbar';
import LandingPage from './components/landingpage/page';

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
import Image from "next/image";
import Footer from "./Footer";
import Team from "./Team";
import Benefit from "./benefit"

export default function Home() {
  return (
    <div className="">
      <main>
        <Benefit/>
        <Team/>
        <Footer/>
       
      </main>
      
    </div>
  );
}
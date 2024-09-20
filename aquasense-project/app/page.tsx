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

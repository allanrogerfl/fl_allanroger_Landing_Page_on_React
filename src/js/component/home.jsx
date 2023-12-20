import React from "react";
import Cards from "./cards";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";

//include images into your bundle
// import Cards from "./cards.jsx";

//create your first component
export default function Home() {
  return (
    <div>
      <div>
      <Navbar />
      </div>
    <div className="container">
      <div >
        <Header />
      </div>
      <div className="d-inline-flex">
        <Cards titulo="Primero titulo"/>
        <Cards titulo="Segundo titulo"/>
        <Cards titulo="Tercer titulo"/>
        <Cards titulo="Cuarto titulo"/>
      </div>
    </div>
      <div>
        <Footer />
      </div>
    </div>

  );
};
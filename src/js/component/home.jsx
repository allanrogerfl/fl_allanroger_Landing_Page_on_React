import React from "react";
import Cards from "./cards";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Header />
        <div className="row">
          <Cards titulo="Primero titulo"/>
          <Cards titulo="Segundo titulo"/>
          <Cards titulo="Tercer titulo"/>
          <Cards titulo="Cuarto titulo"/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

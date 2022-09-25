import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const List = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <Footer />
    </div>
  );
};

export default List;

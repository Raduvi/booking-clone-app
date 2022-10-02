import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/825530.webp?k=0060c3d8560e32a3db4107c4c0ad4fe0259761b2eec2f12512a336ae4a9d5b17&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/673760.webp?k=d73f144dc0d1e4cd555890fdb2913b81782853475cecc23f695303ccbfeea934&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/48040.webp?k=ee178a5eb61ed7246bd80d4d0309e77115784b095d32b1dfa32577c4696d34d1&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Darthmouth</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;

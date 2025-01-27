import React from "react";
import "./Home.css";
import Casual from '../../assets/casual1.png';

const Home = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="logo">Anoras</div>
        <div className="profile">
          <img src={Casual} alt="Profile" className="profile-image" />
        </div>
      </header>

      {/* Main Section */}
      <div className="main">
        {/* Sidebar Section */}
        <div className="sidebar">
          <h2>Menu</h2>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>

        {/* Content Section */}
        <div className="content">
          {/* Search Bar */}
          <div className="search-bar">
            <input type="text" placeholder="Search for products..." />
            <button>Search</button>
          </div>

          {/* Product Container */}
          <div className="product-container">
            <div className="product-card">
              <div className="product-image-container">
                <img
                  src={Casual}
                  alt="Product 1"
                  className="product-image"
                />
              </div>
              <h3 className="product-name">Printed Casual Shirts</h3>
              <p className="product-price">$25.00</p>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <img
                  src={Casual}
                  alt="Product 2"
                  className="product-image"
                />
              </div>
              <h3 className="product-name">Checked Shirts</h3>
              <p className="product-price">$30.00</p>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <img
                  src={Casual}
                  alt="Product 3"
                  className="product-image"
                />
              </div>
              <h3 className="product-name">Premium blazers</h3>
              <p className="product-price">$60.00</p>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <img
                  src={Casual}
                  alt="Product 4"
                  className="product-image"
                />
              </div>
              <h3 className="product-name">Premium blazers</h3>
              <p className="product-price">$30.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
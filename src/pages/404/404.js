import React from "react";
import Iconify from "../../components/Iconify";

const NotFound = () => {
  const handleNavigate = () => {
    localStorage.removeItem("token");
    window.location.href = "/Login";
  };

  return (
    <div className="main-404-container">
      <div className="not-found-container">
        <h1 className="not-found-heading">404</h1>
        <p className="not-found-message">
          Sorry, the page you’re looking for cannot be found.
        </p>
        <div className="not-found-animation">
          <Iconify icon="mdi:alert-circle-outline" className="not-found-icon" />
        </div>
        <button onClick={handleNavigate} className="not-found-button">
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;

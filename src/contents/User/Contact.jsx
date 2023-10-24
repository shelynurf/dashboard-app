import React from "react";
import { Token } from "../../config/Token";
import { Navigate } from "react-router-dom";

const Contact = () => {
  if (!Token) return <Navigate to={"/login"} />;
  return (
    <div className="container">
      <h1>Contact</h1>
      <h3>Address</h3>
      <h3>Formulatrix International Holding Limited</h3>
      <p>
        Unit 6, Level 13 Gate District, Gate Building Dubai International
        Financial Centre Dubai, United Arab Emirates
      </p>
      <h3>Phone</h3>
      <p>+1 781 788 0228</p>
      <h3>Fax</h3>
      <p>+1 781 207 5522</p>
      <h3>Email</h3>
      <p>info@formulatrix.com</p>
    </div>
  );
};

export default Contact;

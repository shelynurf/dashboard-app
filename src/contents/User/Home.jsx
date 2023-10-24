import React, { useEffect } from "react";
import { Token } from "../../config/Token";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!Token) window.location.replace('/login');
  }, [])
  
  return (
    <div className="container">
      <h1>Home</h1>
      <p>
        FORMULATRIX® offers automation solutions for a variety of proteomic and
        genomic applications.
      </p>
      <p>
        Our goal is to collaborate with researchers to simplify the preparation
        and analysis of proteins and nucleic acids by designing automation
        solutions and software that is truly cutting-edge and easy to use.
      </p>

      <h3>Vision</h3>
      <p>
        To enable scientific discoveries in proteomics and genomics for the
        advancement of a disease-free, hunger-free world.
      </p>
      <h3>Mission</h3>
      <p>
        FORMULATRIX® collaborates with researchers to simplify the preparation
        and analysis of proteins and nucleic acids by designing solutions
        without boundaries and bringing novel cutting-edge technology to the
        life science industry. We are committed to researchers, their labs, and
        to the scientific discoveries that will improve the lives of generations
        to come.
      </p>
    </div>
  );
};

export default Home;

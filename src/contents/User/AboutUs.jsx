import React from "react";
import { Token } from "../../config/Token";
import { Navigate } from "react-router-dom";

const AboutUs = () => {
  if (!Token) return <Navigate to={"/login"} />;
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>
        FORMULATRIX® was established in 2002 to provide protein crystallization
        automation solutions. Since then, we've started developing other
        laboratory automation solutions, including the next generation of liquid
        handlers using microfluidic technology. Headquartered in Dubai, UAE, we
        supply software and robotic automation solutions to leading
        pharmaceutical companies and academic research institutions around the
        world. Our team works tirelessly to provide the best products in the
        industry with support that is second to none.
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <strong>Market: </strong>liquid handling; software and robotics for
          automating protein crystallization; sample concentration and
          diafiltration
        </li>
        <li>
          <strong>Size: </strong>~1100 employees worldwide
        </li>
        <li>
          <strong>Incorporation Date: </strong>2002
        </li>
        <li>
          <strong>Ownership: </strong>private, 100% employee-owned
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;

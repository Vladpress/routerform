import React from "react";
import { Link } from "react-router-dom";

import "./greetting.scss";

const Greetting = () => {
  return (
    <div className="greetting">
      <div className="greetting__box">
        <h1 className="greetting__h1">Welcome!</h1>
        <p className="greetting__main-text">
          Please fill in the form so that we can greet you!
        </p>
        <div className="greetting__but-wrap">
          <Link className="greetting__submit" to="/choose">
            Start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Greetting;

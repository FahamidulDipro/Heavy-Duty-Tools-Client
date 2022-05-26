import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-3xl font-bold">
              Welcome To{" "}
              <span className="text-orange-500">Heavy Duty Tools</span>{" "}
            </h1>
            <p class="py-6">
              Heavy Duty Tools is a fully functional tools purchasing webapp by
              built for purchasing tools sitting at home. You can get all of
              your necessery tools here at a reasonable price
            </p>

            <button class="btn btn-primary">
              {" "}
              <Link to="/">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

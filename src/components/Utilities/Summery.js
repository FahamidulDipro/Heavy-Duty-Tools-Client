import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdReviews } from "react-icons/md";
import { BsTools } from "react-icons/bs";
const Summery = () => {
  return (
    <div className="flex justify-center">
      <div className="stats stats-vertical lg:stats-horizontal shadow flex justify-between lg:flex-row sm:flex-col flex-col my-20 w-3/4">
        <div className="stat">
          <div className="stat-title">Customers We Served</div>
          <div className="flex justify-center">
            <FaUserAlt className="stat-value my-3"></FaUserAlt>
          </div>

          <div className="stat-value  text-accent">350+</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">Annual Revenue</div>
          <div className="flex justify-center">
            <GiReceiveMoney className="stat-value my-3"></GiReceiveMoney>
          </div>
          <div className="stat-value text-blue-500">120M+</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">Reviews</div>
          <div className="flex justify-center">
            <MdReviews className="stat-value my-3"></MdReviews>
          </div>
          <div className="stat-value text-purple-500">33K+</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div className="stat">
          <div className="stat-title">Tools</div>
          <div className="flex justify-center">
            <BsTools className="stat-value my-3"></BsTools>
          </div>
          <div className="stat-value text-green-500">80+</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Summery;

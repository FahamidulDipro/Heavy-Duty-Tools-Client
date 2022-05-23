import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="relative ">
      <h1 className="text-3xl w-full  float-left mt-10 ">
        Welcome to Dashboard
      </h1>
      <div class="drawer drawer-mobile mt-0 absolute">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-start justify-start">
          <Outlet></Outlet>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80  text-base-content bg-secondary mt-0 text-primary">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="orders">My Orders</Link>
            </li>
            <li>
              <Link to="review">My Reviews</Link>
            </li>
            <li>
              <Link to="profile">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
